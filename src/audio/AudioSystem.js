import { DEFAULT_AUDIO_CONFIG, cloneAudioConfig, normalizeAudioConfig } from './audioConfig.js';

export const AUDIO_PROFILES = DEFAULT_AUDIO_CONFIG.profiles;

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export class AudioSystem {
  constructor({ random = Math.random, config = null } = {}) {
    this.config = normalizeAudioConfig(config ?? cloneAudioConfig());
    this.random = random;
    this.ctx = null;
    this.master = null;
    this.buses = null;
    this.noiseBuffer = null;
    this.levelId = null;
    this.levelOptions = { emitters: [] };
    this.levelNodes = [];
    this.levelGain = null;
    this.radioNodes = [];
    this.lastState = null;
    this.breathTimer = 0.65;
    this.stepTimer = 0;
    this.ambientTimer = 3.5;
    this.heartTimer = 0.7;
    this.muted = false;
  }

  unlock() {
    if (!this.ctx) {
      const AudioContextClass = globalThis.AudioContext ?? globalThis.webkitAudioContext;
      if (!AudioContextClass) return false;
      this.ctx = new AudioContextClass();

      this.master = this.ctx.createGain();
      this.master.gain.value = this.config.master;

      const compressor = this.ctx.createDynamicsCompressor();
      compressor.threshold.value = -18;
      compressor.knee.value = 12;
      compressor.ratio.value = 5;
      compressor.attack.value = 0.003;
      compressor.release.value = 0.18;

      this.buses = {
        ambience: this.ctx.createGain(),
        darkAmbient: this.ctx.createGain(),
        music: this.ctx.createGain(),
        body: this.ctx.createGain(),
        radio: this.ctx.createGain(),
        sfx: this.ctx.createGain()
      };
      this.#applyBusConfig();

      for (const bus of Object.values(this.buses)) bus.connect(this.master);
      this.master.connect(compressor);
      compressor.connect(this.ctx.destination);
      this.noiseBuffer = this.#createNoiseBuffer(2.0);
    }

    if (this.ctx.state === 'suspended') this.ctx.resume();
    if (this.levelId && this.levelNodes.length === 0) this.#startLevelBed();
    return true;
  }

  getConfig() {
    return cloneAudioConfig(this.config);
  }

  setConfig(nextConfig = {}) {
    this.config = normalizeAudioConfig(nextConfig);
    if (this.ctx) {
      this.#applyBusConfig();
      const now = this.ctx.currentTime;
      this.master.gain.cancelScheduledValues(now);
      this.master.gain.setTargetAtTime(this.muted ? 0.0001 : Math.max(0.0001, this.config.master), now, 0.025);
      this.#stopLevelBed();
      this.#startLevelBed();
    }
    return this.getConfig();
  }

  previewAmbient(type, position = null) {
    this.#ambientEvent(type, position);
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.ctx && this.master) {
      const now = this.ctx.currentTime;
      this.master.gain.cancelScheduledValues(now);
      this.master.gain.setValueAtTime(Math.max(0.0001, this.master.gain.value), now);
      this.master.gain.exponentialRampToValueAtTime(this.muted ? 0.0001 : Math.max(0.0001, this.config.master), now + 0.08);
    }
    return this.muted;
  }

  setLevel(levelId, options = {}) {
    this.levelId = levelId;
    this.levelOptions = { emitters: [], ...options };
    this.breathTimer = 0.45;
    this.stepTimer = 0;
    this.ambientTimer = 1.8 + this.random() * 2.2;
    this.musicTimer = 0.35;
    this.musicStep = 0;
    this.heartTimer = 0.7;
    this.stopRadio();
    this.#stopLevelBed();
    if (this.ctx) this.#startLevelBed();
  }

  update(dt, state = {}) {
    this.lastState = state;
    if (!this.ctx || !this.buses) return;

    const healthRatio = clamp((state.health ?? 8) / Math.max(1, state.maxHealth ?? 8), 0, 1);
    const infection = clamp(state.infection ?? 0, 0, 1);
    const danger = clamp(state.danger ?? 0, 0, 1);
    const moving = Boolean(state.moving) && !state.paused && !state.dead;

    // Breathing is a diegetic health/infection meter. It is intentionally always audible.
    this.breathTimer -= dt;
    if (this.breathTimer <= 0 && !state.dead) {
      const stress = Math.max(1 - healthRatio, infection * 0.72, danger * 0.82, moving ? 0.25 : 0);
      this.breath(0.55 + stress * 0.70);
      const interval = clamp(3.55 - stress * 1.7 - (moving ? 0.55 : 0), 1.25, 3.8);
      this.breathTimer = interval;
    }

    // Footsteps give the otherwise abstract low-poly corridors material identity.
    if (moving) {
      this.stepTimer -= dt;
      if (this.stepTimer <= 0) {
        this.footstep(this.#profile()?.step ?? 'concrete');
        this.stepTimer = state.slowed ? 0.62 : 0.46;
      }
    } else {
      this.stepTimer = Math.min(this.stepTimer, 0.08);
    }

    // At high resonance, the player starts hearing a heartbeat that may not be theirs.
    if (infection > 0.56 || healthRatio < 0.42) {
      this.heartTimer -= dt;
      if (this.heartTimer <= 0) {
        this.heartbeat(0.25 + Math.max(infection, 1 - healthRatio) * 0.45);
        this.heartTimer = clamp(1.05 - Math.max(infection, 1 - healthRatio) * 0.42, 0.48, 1.0);
      }
    } else {
      this.heartTimer = 0.7;
    }

    const profile = this.#profile();
    if (profile && !state.paused) {
      this.ambientTimer -= dt;
      if (this.ambientTimer <= 0) {
        const type = profile.events[(this.random() * profile.events.length) | 0];
        const emitter = this.#pickEmitter(type);
        this.#ambientEvent(type, emitter);
        this.ambientTimer = profile.eventMin + this.random() * (profile.eventMax - profile.eventMin);
      }
      this.#updateMusic(dt, profile, danger, infection);
    }
  }

  tone(freq = 220, duration = 0.06, type = 'square', volume = 0.18, slide = 0, bus = 'sfx', pan = 0) {
    if (!this.ctx || !this.buses) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const panner = this.#panner(pan);
    osc.type = type;
    osc.frequency.setValueAtTime(Math.max(20, freq), now);
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), now + Math.max(0.015, duration));
    gain.gain.setValueAtTime(Math.max(0.0001, volume), now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain);
    this.#route(gain, panner, this.buses[bus] ?? this.buses.sfx);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  shot(id) {
    if (!this.ctx) return;
    const configs = {
      shotgun: { f: 72, d: 0.16, noise: 0.22, cut: 760 },
      ak: { f: 105, d: 0.075, noise: 0.13, cut: 1250 },
      arcCutter: { f: 420, d: 0.16, noise: 0.035, cut: 2450 },
      flamethrower: { f: 58, d: 0.07, noise: 0.16, cut: 520 },
      fungus: { f: 280, d: 0.18, noise: 0.08, cut: 620 },
      drill: { f: 78, d: 0.24, noise: 0.10, cut: 900 },
      resonator: { f: 510, d: 0.22, noise: 0.04, cut: 2600 },
      pm: { f: 132, d: 0.095, noise: 0.15, cut: 1150 }
    };
    const c = configs[id] ?? configs.pm;
    this.#noiseBurst(c.d, c.noise, { filter: 'lowpass', frequency: c.cut, bus: 'sfx' });
    this.tone(c.f, c.d, id === 'resonator' ? 'sine' : 'square', 0.18, -c.f * 0.48);
    if (id === 'resonator') this.tone(760, 0.18, 'sine', 0.075, 260);
    if (id === 'arcCutter') this.tone(880, 0.12, 'sine', 0.06, -210);
  }

  pickup() {
    this.tone(430, 0.065, 'square', 0.10, 170);
    this.tone(690, 0.045, 'square', 0.055, 90);
  }

  ui() { this.tone(250, 0.035, 'square', 0.075, 0); }

  door() {
    this.#noiseBurst(0.42, 0.055, { filter: 'bandpass', frequency: 340, q: 0.55 });
    this.tone(64, 0.34, 'sawtooth', 0.075, -16);
  }

  transition() {
    this.stopRadio();
    this.tone(172, 0.16, 'square', 0.10, 100);
    this.tone(86, 0.28, 'sine', 0.07, -34);
  }

  teleport(kind = 'space') {
    this.#noiseBurst(0.22, 0.07, { filter: 'bandpass', frequency: 1400, q: 1.4 });
    this.tone(kind === 'loop' ? 318 : 246, 0.26, 'sine', 0.10, kind === 'loop' ? -160 : 190);
  }

  playerHit(source = 'unknown') {
    this.#noiseBurst(0.16, 0.085, { filter: 'lowpass', frequency: 500, bus: 'body' });
    this.tone(source === 'wailer' ? 110 : 82, 0.14, 'sawtooth', 0.08, -24, 'body');
  }

  enemyHit({ position } = {}) {
    const { pan, gain } = this.#spatial(position);
    this.#noiseBurst(0.10, 0.045 * gain, { filter: 'bandpass', frequency: 620, q: 0.8, pan });
  }

  enemyDeath({ enemy, position } = {}) {
    const { pan, gain } = this.#spatial(position);
    if (enemy?.type === 'hive' || enemy?.type === 'irritantCore') {
      this.#noiseBurst(0.65, 0.09 * gain, { filter: 'lowpass', frequency: 380, pan });
      this.tone(54, 0.52, 'sawtooth', 0.08 * gain, -22, 'sfx', pan);
    } else {
      this.#noiseBurst(0.28, 0.065 * gain, { filter: 'bandpass', frequency: 520, q: 0.65, pan });
      this.tone(92, 0.23, 'sawtooth', 0.055 * gain, -38, 'sfx', pan);
    }
  }

  enemyVoice({ type, position } = {}) {
    const { pan, gain } = this.#spatial(position);
    if (type === 'wailer') {
      this.tone(118, 0.44, 'sawtooth', 0.045 * gain, 28, 'sfx', pan);
    } else if (type === 'hive') {
      this.#noiseBurst(0.52, 0.055 * gain, { filter: 'lowpass', frequency: 300, pan });
      this.tone(47, 0.48, 'sine', 0.05 * gain, 9, 'sfx', pan);
    } else if (type === 'whipster') {
      this.#noiseBurst(0.24, 0.045 * gain, { filter: 'bandpass', frequency: 980, q: 1.3, pan });
    } else {
      this.#noiseBurst(0.28, 0.045 * gain, { filter: 'bandpass', frequency: 440, q: 0.7, pan });
      this.tone(74, 0.20, 'sawtooth', 0.035 * gain, -16, 'sfx', pan);
    }
  }

  enemyAttack({ type = 'projectile', position } = {}) {
    const { pan, gain } = this.#spatial(position);
    if (type === 'projectile') {
      this.#noiseBurst(0.18, 0.038 * gain, { filter: 'bandpass', frequency: 1050, q: 1.1, pan });
      this.tone(260, 0.12, 'sine', 0.025 * gain, -110, 'sfx', pan);
    } else {
      this.#noiseBurst(0.30, 0.050 * gain, { filter: 'lowpass', frequency: 620, pan });
      this.tone(type === 'collectiveBurst' ? 62 : 84, 0.24, 'sawtooth', 0.045 * gain, 22, 'sfx', pan);
    }
  }

  wail({ position, boss = false } = {}) {
    const { pan, gain } = this.#spatial(position);
    this.#noiseBurst(0.62, 0.08 * gain, { filter: 'bandpass', frequency: 880, q: 2.2, pan });
    this.tone(boss ? 72 : 94, 0.62, 'sawtooth', 0.12 * gain, boss ? 70 : 46, 'sfx', pan);
    this.tone(boss ? 144 : 188, 0.55, 'sine', 0.06 * gain, -30, 'sfx', -pan * 0.6);
  }

  sporeBurst({ position } = {}) {
    const { pan, gain } = this.#spatial(position);
    this.#noiseBurst(0.5, 0.085 * gain, { filter: 'highpass', frequency: 650, q: 0.4, pan });
    this.tone(155, 0.22, 'sine', 0.035 * gain, -75, 'sfx', pan);
  }

  fungalBurst({ position } = {}) {
    const { pan, gain } = this.#spatial(position);
    this.#noiseBurst(0.42, 0.06 * gain, { filter: 'bandpass', frequency: 740, q: 0.8, pan });
    this.tone(340, 0.34, 'sine', 0.045 * gain, -210, 'sfx', pan);
  }

  infectionTier(tier = 0) {
    if (tier < 2) return;
    this.tone(210 - tier * 18, 0.24 + tier * 0.06, 'sine', 0.035 + tier * 0.008, -35, 'body');
  }

  flicker() {
    if (this.random() > 0.55) return;
    this.#noiseBurst(0.045, 0.022, { filter: 'highpass', frequency: 2400, q: 0.9, bus: 'ambience' });
  }

  inhaler() {
    this.#noiseBurst(0.42, 0.055, { filter: 'highpass', frequency: 1100, q: 0.7, bus: 'body' });
    this.tone(310, 0.12, 'sine', 0.06, -90, 'body');
  }

  shield() {
    this.tone(180, 0.20, 'square', 0.07, 120);
    this.tone(360, 0.28, 'sine', 0.045, -40);
  }

  bossPhase(phase) {
    this.#noiseBurst(0.65, 0.07, { filter: 'bandpass', frequency: 260 + phase * 120, q: 1.4 });
    this.tone(58 + phase * 13, 0.8, 'sine', 0.08, 22 * phase);
  }

  slimeContact(strength = 1) {
    const k = Math.max(1, strength);
    this.#noiseBurst(0.7, 0.035 + k * 0.006, { filter: 'bandpass', frequency: 520 + k * 80, q: 1.5, bus: 'body', attack: 0.18 });
    this.tone(93 + k * 11, 0.9, 'sine', 0.035, 85 + k * 16, 'body');
    this.tone(139 + k * 7, 0.65, 'triangle', 0.018, -42, 'ambience', -0.25);
  }

  ending(ending) {
    this.stopRadio();
    if (ending === 'burn') {
      this.#noiseBurst(1.2, 0.12, { filter: 'lowpass', frequency: 950 });
      this.tone(54, 1.0, 'sawtooth', 0.10, -28);
    } else if (ending === 'broadcast') {
      this.tone(167, 1.8, 'sine', 0.07, 390, 'radio');
      this.tone(334, 1.5, 'triangle', 0.045, -100, 'radio');
      this.#noiseBurst(1.4, 0.035, { filter: 'bandpass', frequency: 1700, q: 2.0, bus: 'radio', attack: 0.25 });
    } else if (ending === 'sever') {
      this.tone(84, 0.9, 'square', 0.06, -40, 'body');
      this.#noiseBurst(0.8, 0.05, { filter: 'highpass', frequency: 1700, bus: 'sfx' });
    } else {
      this.tone(110, 1.4, 'sine', 0.08, 330);
      this.tone(165, 1.25, 'sine', 0.05, 510, 'body');
    }
  }

  narrativeLine({ speaker = '', duration = 2.5 } = {}) {
    if (!this.ctx) return;
    this.stopRadio();
    const name = speaker.toUpperCase();
    if (name.includes('К.О.Н.Т.У.Р') || name.includes('БИОСКАНЕР')) {
      this.#radioSquelch();
      this.#radioBed(Math.max(0.7, duration - 0.15), name.includes('БИОСКАНЕР') ? 1250 : 1750, 0.017 * this.config.radio.hissGain);
    } else if (name.includes('ЗАПИСЬ')) {
      this.#tapeStart();
      this.#radioBed(Math.max(0.8, duration), 2400, 0.013 * this.config.radio.hissGain);
    } else if (name.includes('НЕИЗВЕСТ') || name.includes('О-41')) {
      this.#signalLine(duration);
    }
  }

  stopRadio() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    for (const node of this.radioNodes.splice(0)) {
      try {
        if (node.gain?.gain) {
          node.gain.gain.cancelScheduledValues(now);
          node.gain.gain.setValueAtTime(Math.max(0.0001, node.gain.gain.value), now);
          node.gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
        }
        node.source?.stop(now + 0.05);
        node.osc?.stop(now + 0.05);
      } catch {}
    }
  }

  breath(strength = 0.7) {
    if (!this.ctx) return;
    const volume = clamp(0.018 + strength * 0.018, 0.018, 0.045) * this.config.body.breathGain;
    this.#noiseBurst(0.72, volume, { filter: 'bandpass', frequency: 920 - strength * 190, q: 0.55, bus: 'body', attack: 0.18 });
    if (strength > 0.85) this.tone(92, 0.42, 'sine', 0.008 * strength, -8, 'body');
  }

  heartbeat(strength = 0.4) {
    if (!this.ctx) return;
    const v = clamp(strength, 0.12, 0.65);
    this.tone(52, 0.095, 'sine', 0.045 * v * this.config.body.heartbeatGain, -12, 'body');
    const delay = 0.12;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(46, now + delay);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.setValueAtTime(0.035 * v * this.config.body.heartbeatGain, now + delay);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 0.10);
    osc.connect(gain); gain.connect(this.buses.body);
    osc.start(now + delay); osc.stop(now + delay + 0.12);
  }

  footstep(surface = 'concrete') {
    if (!this.ctx) return;
    const config = {
      concrete: { f: 105, cut: 520, noise: 0.028 },
      metal: { f: 155, cut: 1050, noise: 0.026 },
      organic: { f: 68, cut: 360, noise: 0.038 },
      white: { f: 125, cut: 900, noise: 0.016 }
    }[surface] ?? { f: 105, cut: 520, noise: 0.028 };
    this.#noiseBurst(0.075, config.noise * this.config.body.footstepGain, { filter: 'lowpass', frequency: config.cut, bus: 'body' });
    this.tone(config.f, 0.055, surface === 'metal' ? 'square' : 'sine', 0.022 * this.config.body.footstepGain, -35, 'body', (this.random() - 0.5) * 0.18);
  }

  #profile() {
    return this.config.profiles?.[this.levelId] ?? AUDIO_PROFILES[this.levelId] ?? null;
  }

  #applyBusConfig() {
    if (!this.buses) return;
    for (const [name, node] of Object.entries(this.buses)) {
      const value = this.config.buses?.[name];
      if (Number.isFinite(value)) node.gain.value = value;
    }
  }

  #startLevelBed() {
    const profile = this.#profile();
    if (!profile || !this.ctx || !this.buses) return;
    const now = this.ctx.currentTime;
    const levelGain = this.ctx.createGain();
    levelGain.gain.setValueAtTime(0.0001, now);
    levelGain.gain.exponentialRampToValueAtTime(0.9, now + 0.8);
    levelGain.connect(this.buses.ambience);
    this.levelGain = levelGain;

    for (let i = 0; i < profile.hum.length; i++) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = i === 0 ? 'sine' : 'triangle';
      osc.frequency.value = profile.hum[i];
      gain.gain.value = profile.humGain / (1 + i * 0.75);
      osc.connect(gain); gain.connect(levelGain); osc.start();
      this.levelNodes.push({ source: osc });
    }

    if (profile.highTone) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = profile.highTone;
      gain.gain.value = profile.highGain ?? 0.004;
      osc.connect(gain); gain.connect(levelGain); osc.start();
      this.levelNodes.push({ source: osc });
    }

    const source = this.ctx.createBufferSource();
    source.buffer = this.noiseBuffer;
    source.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass'; filter.frequency.value = profile.noiseCutoff; filter.Q.value = 0.4;
    const noiseGain = this.ctx.createGain();
    noiseGain.gain.value = profile.noiseGain;
    source.connect(filter); filter.connect(noiseGain); noiseGain.connect(levelGain); source.start();
    this.levelNodes.push({ source });

    if (this.config.darkAmbient.enabled && profile.ambientGain > 0 && this.buses.darkAmbient) {
      const darkGain = this.ctx.createGain();
      darkGain.gain.value = profile.ambientGain * this.config.darkAmbient.globalGain;
      darkGain.connect(this.buses.darkAmbient);

      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.type = 'sine';
      lfo.frequency.value = this.config.darkAmbient.pulseHz;
      lfoGain.gain.value = profile.ambientGain * this.config.darkAmbient.pulseDepth;
      lfo.connect(lfoGain); lfoGain.connect(darkGain.gain); lfo.start();
      this.levelNodes.push({ source: lfo });

      const ratios = [1, 1.497, 2.013];
      for (let i = 0; i < ratios.length; i++) {
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();
        osc.type = i === 0 ? 'sine' : 'triangle';
        osc.frequency.value = Math.max(20, profile.ambientRoot * ratios[i]);
        osc.detune.value = (i - 1) * profile.ambientDetune;
        g.gain.value = 0.52 / (1 + i * 0.8);
        filter.type = 'lowpass'; filter.frequency.value = profile.ambientBrightness; filter.Q.value = 0.5;
        osc.connect(filter); filter.connect(g); g.connect(darkGain); osc.start();
        this.levelNodes.push({ source: osc });
      }

      const darkNoise = this.ctx.createBufferSource();
      darkNoise.buffer = this.noiseBuffer; darkNoise.loop = true;
      const darkFilter = this.ctx.createBiquadFilter();
      const darkNoiseGain = this.ctx.createGain();
      darkFilter.type = 'bandpass'; darkFilter.frequency.value = Math.max(90, profile.ambientBrightness * 0.55); darkFilter.Q.value = 0.35;
      darkNoiseGain.gain.value = this.config.darkAmbient.noiseGain;
      darkNoise.connect(darkFilter); darkFilter.connect(darkNoiseGain); darkNoiseGain.connect(darkGain); darkNoise.start();
      this.levelNodes.push({ source: darkNoise });
    }

    if (this.config.music.enabled && profile.musicGain > 0 && this.buses.music) {
      const musicGain = this.ctx.createGain();
      musicGain.gain.setValueAtTime(0.0001, now);
      musicGain.gain.exponentialRampToValueAtTime(profile.musicGain * this.config.music.globalGain * 0.34, now + 2.2);
      musicGain.connect(this.buses.music);
      for (const [ratio, type, gain] of [[0.5, 'sine', 0.75], [1, 'triangle', 0.40], [1.5, 'sine', 0.22]]) {
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = type;
        osc.frequency.value = Math.max(20, profile.musicRoot * ratio);
        g.gain.value = gain;
        osc.connect(g); g.connect(musicGain); osc.start();
        this.levelNodes.push({ source: osc });
      }
    }
  }

  #updateMusic(dt, profile, danger, infection) {
    if (!this.config.music.enabled || !profile.musicGain) return;
    this.musicTimer -= dt;
    if (this.musicTimer > 0) return;

    const scale = profile.musicScale;
    const note = scale[this.musicStep++ % scale.length];
    const root = profile.musicRoot * Math.pow(2, note / 12);
    const volume = profile.musicGain * this.config.music.globalGain * (0.72 + danger * 0.22 + infection * 0.10);
    this.tone(root, 2.2 + this.random() * 1.5, 'sine', volume, 0, 'music', (this.random() - 0.5) * 0.2);
    this.tone(root * 1.5, 1.45 + this.random(), 'triangle', volume * 0.32, -root * 0.025, 'music', -0.12);
    this.musicTimer = this.config.music.phraseMin + this.random() * (this.config.music.phraseMax - this.config.music.phraseMin);
  }

  #stopLevelBed() {
    if (!this.ctx) { this.levelNodes.length = 0; this.levelGain = null; return; }
    const now = this.ctx.currentTime;
    if (this.levelGain) {
      try {
        this.levelGain.gain.cancelScheduledValues(now);
        this.levelGain.gain.setValueAtTime(Math.max(0.0001, this.levelGain.gain.value), now);
        this.levelGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
      } catch {}
    }
    for (const node of this.levelNodes.splice(0)) {
      try { node.source?.stop(now + 0.18); } catch {}
    }
    this.levelGain = null;
  }

  #createNoiseBuffer(seconds) {
    const length = Math.max(1, Math.floor(this.ctx.sampleRate * seconds));
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let brown = 0;
    for (let i = 0; i < length; i++) {
      const white = this.random() * 2 - 1;
      brown = clamp((brown + white * 0.055) / 1.045, -1, 1);
      data[i] = white * 0.55 + brown * 0.75;
    }
    return buffer;
  }

  #noiseBurst(duration, volume, { filter = 'bandpass', frequency = 900, q = 0.7, bus = 'sfx', pan = 0, attack = 0.008 } = {}) {
    if (!this.ctx || !this.noiseBuffer || !this.buses) return;
    const now = this.ctx.currentTime;
    const source = this.ctx.createBufferSource();
    source.buffer = this.noiseBuffer;
    const biquad = this.ctx.createBiquadFilter();
    biquad.type = filter;
    biquad.frequency.value = frequency;
    biquad.Q.value = q;
    const gain = this.ctx.createGain();
    const panner = this.#panner(pan);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(Math.max(0.0001, volume), now + Math.min(attack, duration * 0.4));
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    source.connect(biquad); biquad.connect(gain);
    this.#route(gain, panner, this.buses[bus] ?? this.buses.sfx);
    source.start(now); source.stop(now + duration + 0.03);
  }

  #panner(pan) {
    if (!this.ctx?.createStereoPanner) return null;
    const node = this.ctx.createStereoPanner();
    node.pan.value = clamp(pan, -1, 1);
    return node;
  }

  #route(source, panner, destination) {
    if (panner) { source.connect(panner); panner.connect(destination); }
    else source.connect(destination);
  }

  #spatial(position) {
    const state = this.lastState;
    if (!position || !state?.position) return { pan: (this.random() - 0.5) * 0.5, gain: 0.8 };
    const dx = position.x - state.position.x;
    const dz = position.z - state.position.z;
    const distance = Math.hypot(dx, dz) || 0.001;
    const rightX = Math.cos(state.yaw ?? 0);
    const rightZ = -Math.sin(state.yaw ?? 0);
    const pan = clamp((dx * rightX + dz * rightZ) / distance, -0.92, 0.92);
    return { pan, gain: clamp(1.15 / (1 + distance * 0.12), 0.18, 1) };
  }

  #pickEmitter(type) {
    const emitters = this.levelOptions.emitters ?? [];
    const exact = emitters.filter((emitter) => !emitter.type || emitter.type === type);
    const pool = exact.length ? exact : emitters;
    return pool.length ? pool[(this.random() * pool.length) | 0] : null;
  }

  #ambientEvent(type, emitter) {
    const { pan, gain } = this.#spatial(emitter);
    const v = 0.72 * gain;
    switch (type) {
      case 'metal':
        this.tone(116 + this.random() * 54, 0.08, 'square', 0.045 * v, -70, 'ambience', pan);
        this.tone(58, 0.22, 'sine', 0.032 * v, -18, 'ambience', pan);
        break;
      case 'relay':
        this.tone(620, 0.018, 'square', 0.025 * v, -240, 'ambience', pan);
        if (this.random() < 0.5) this.tone(480, 0.016, 'square', 0.020 * v, 80, 'ambience', -pan);
        break;
      case 'drip':
        this.tone(760, 0.055, 'sine', 0.020 * v, -410, 'ambience', pan);
        break;
      case 'fluorescent':
        this.#noiseBurst(0.065, 0.024 * v, { filter: 'highpass', frequency: 2600, q: 1.1, bus: 'ambience', pan });
        break;
      case 'ghostRadio':
        this.#noiseBurst(0.18, 0.018 * v, { filter: 'bandpass', frequency: 1800, q: 1.3, bus: 'ambience', pan });
        this.tone(330, 0.03, 'square', 0.008 * v, 120, 'ambience', pan);
        break;
      case 'server':
        this.tone(178, 0.38, 'triangle', 0.018 * v, 9, 'ambience', pan);
        break;
      case 'tape':
        this.#noiseBurst(0.30, 0.023 * v, { filter: 'bandpass', frequency: 2200, q: 0.7, bus: 'ambience', pan });
        this.tone(1040, 0.018, 'square', 0.012 * v, -260, 'ambience', pan);
        break;
      case 'printer':
        for (let i = 0; i < 4; i++) this.#delayedClick(0.06 * i, 350 + i * 40, 0.018 * v, pan);
        break;
      case 'steam':
        this.#noiseBurst(0.9 + this.random() * 0.5, 0.055 * v, { filter: 'highpass', frequency: 720, q: 0.45, bus: 'ambience', pan, attack: 0.08 });
        break;
      case 'turbine':
        this.tone(42, 0.85, 'sine', 0.042 * v, 8, 'ambience', pan);
        this.tone(84, 0.72, 'triangle', 0.018 * v, -4, 'ambience', pan);
        break;
      case 'geiger':
        for (let i = 0; i < 3 + ((this.random() * 4) | 0); i++) this.#delayedClick(this.random() * 0.5, 1250, 0.013 * v, pan);
        break;
      case 'pressure':
        this.tone(72, 0.48, 'sawtooth', 0.025 * v, -20, 'ambience', pan);
        this.#noiseBurst(0.35, 0.022 * v, { filter: 'lowpass', frequency: 420, bus: 'ambience', pan });
        break;
      case 'wet':
        this.#noiseBurst(0.36, 0.032 * v, { filter: 'lowpass', frequency: 320, q: 0.6, bus: 'ambience', pan });
        this.tone(54 + this.random() * 20, 0.28, 'sine', 0.018 * v, 16, 'ambience', pan);
        break;
      case 'pulse':
        this.tone(39, 0.18, 'sine', 0.043 * v, -6, 'ambience', pan);
        this.#delayedClick(0.17, 52, 0.027 * v, pan, 'sine');
        break;
      case 'sporeHiss':
        this.#noiseBurst(0.75, 0.028 * v, { filter: 'bandpass', frequency: 960, q: 0.9, bus: 'ambience', pan, attack: 0.14 });
        break;
      case 'whisper':
        this.#noiseBurst(0.58, 0.018 * v, { filter: 'bandpass', frequency: 1450, q: 2.0, bus: 'ambience', pan, attack: 0.16 });
        this.tone(210, 0.46, 'sine', 0.010 * v, this.random() < 0.5 ? -70 : 90, 'ambience', -pan);
        break;
      case 'resonance':
        this.tone(410, 0.72, 'sine', 0.020 * v, 90, 'ambience', pan);
        this.tone(615, 0.62, 'sine', 0.012 * v, -55, 'ambience', -pan);
        break;
      case 'distantPulse':
        this.tone(31, 0.65, 'sine', 0.030 * v, 5, 'ambience', pan);
        break;
    }
  }

  #delayedClick(delay, frequency, volume, pan, type = 'square') {
    if (!this.ctx || !this.buses) return;
    const start = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const panner = this.#panner(pan);
    osc.type = type; osc.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.linearRampToValueAtTime(volume, start + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.025);
    osc.connect(gain); this.#route(gain, panner, this.buses.ambience);
    osc.start(start); osc.stop(start + 0.03);
  }

  #radioSquelch() {
    this.#noiseBurst(0.15, 0.075 * this.config.radio.squelchGain, { filter: 'bandpass', frequency: 1900, q: 1.2, bus: 'radio', attack: 0.006 });
    this.tone(1120, 0.028, 'square', 0.028 * this.config.radio.squelchGain, -260, 'radio');
  }

  #tapeStart() {
    this.#noiseBurst(0.21, 0.038, { filter: 'highpass', frequency: 1600, q: 0.5, bus: 'radio' });
    this.tone(720, 0.018, 'square', 0.020, -120, 'radio', -0.2);
    this.tone(560, 0.018, 'square', 0.016, 80, 'radio', 0.2);
  }

  #radioBed(duration, frequency, volume) {
    if (!this.ctx || !this.buses) return;
    const now = this.ctx.currentTime;
    const source = this.ctx.createBufferSource(); source.buffer = this.noiseBuffer; source.loop = true;
    const filter = this.ctx.createBiquadFilter(); filter.type = 'bandpass'; filter.frequency.value = frequency; filter.Q.value = 0.8;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(volume, now + 0.12);
    gain.gain.setValueAtTime(volume * 0.85, now + Math.max(0.15, duration - 0.12));
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    source.connect(filter); filter.connect(gain); gain.connect(this.buses.radio);
    source.start(now); source.stop(now + duration + 0.03);
    this.radioNodes.push({ source, gain });
  }

  #signalLine(duration) {
    if (!this.ctx || !this.buses) return;
    const now = this.ctx.currentTime;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.028 * this.config.radio.signalGain, now + 0.18);
    gain.gain.setValueAtTime(0.020 * this.config.radio.signalGain, now + Math.max(0.25, duration - 0.25));
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    gain.connect(this.buses.radio);
    for (const [frequency, detune] of [[111, -7], [167, 9], [251, -4]]) {
      const osc = this.ctx.createOscillator();
      osc.type = 'sine'; osc.frequency.value = frequency; osc.detune.value = detune;
      osc.connect(gain); osc.start(now); osc.stop(now + duration + 0.03);
      this.radioNodes.push({ osc, gain });
    }
    this.#noiseBurst(Math.min(duration, 0.8), 0.012, { filter: 'bandpass', frequency: 1250, q: 2.4, bus: 'radio', attack: 0.2 });
  }
}
