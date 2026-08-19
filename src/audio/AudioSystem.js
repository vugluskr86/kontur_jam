export class AudioSystem {
  constructor() {
    this.ctx = null;
    this.master = null;
  }

  unlock() {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.12;
      this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }

  tone(freq = 220, duration = 0.06, type = 'square', volume = 0.18, slide = 0) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.linearRampToValueAtTime(Math.max(20, freq + slide), now + duration);
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    osc.connect(gain); gain.connect(this.master);
    osc.start(now); osc.stop(now + duration);
  }

  shot(id) {
    if (id === 'shotgun') { this.tone(90, 0.11, 'square', 0.45, -45); this.tone(180, 0.06, 'sawtooth', 0.25, -100); }
    else if (id === 'ak') this.tone(125, 0.045, 'square', 0.22, -60);
    else if (id === 'fungus') this.tone(310, 0.16, 'sine', 0.25, -180);
    else if (id === 'drill') this.tone(80, 0.22, 'sawtooth', 0.30, 120);
    else if (id === 'resonator') this.tone(540, 0.13, 'sine', 0.25, 220);
    else this.tone(150, 0.055, 'square', 0.26, -75);
  }

  pickup() { this.tone(440, 0.06, 'square', 0.12, 160); }
  ui() { this.tone(250, 0.035, 'square', 0.09, 0); }
  wail() { this.tone(95, 0.55, 'sawtooth', 0.18, 55); }
  transition() { this.tone(180, 0.18, 'square', 0.12, 110); }
}
