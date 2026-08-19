export const AUDIO_CONFIG_STORAGE_KEY = 'kontur041.audio.v1';

export const DEFAULT_AUDIO_CONFIG = Object.freeze({
  version: 1,
  master: 0.22,
  buses: {
    ambience: 0.62,
    darkAmbient: 0.52,
    music: 0.68,
    body: 0.72,
    radio: 0.90,
    sfx: 0.92
  },
  body: {
    breathGain: 1.0,
    heartbeatGain: 1.0,
    footstepGain: 1.0
  },
  radio: {
    squelchGain: 1.0,
    hissGain: 1.0,
    signalGain: 1.0
  },
  darkAmbient: {
    enabled: true,
    globalGain: 0.62,
    pulseDepth: 0.22,
    pulseHz: 0.055,
    noiseGain: 0.028
  },
  music: {
    enabled: true,
    globalGain: 0.82,
    phraseMin: 1.8,
    phraseMax: 3.7
  },
  profiles: {
    perimeter: {
      hum: [50, 100], humGain: 0.018, noiseGain: 0.028, noiseCutoff: 720,
      eventMin: 3.8, eventMax: 8.5, events: ['metal', 'relay', 'drip', 'fluorescent', 'ghostRadio'], step: 'concrete',
      ambientRoot: 43, ambientGain: 0.045, ambientDetune: 7, ambientBrightness: 480,
      musicRoot: 43, musicGain: 0.052, musicScale: [0, 3, 7, 10]
    },
    archive: {
      hum: [62, 124, 248], humGain: 0.013, noiseGain: 0.036, noiseCutoff: 1050,
      eventMin: 3.0, eventMax: 7.0, events: ['relay', 'server', 'tape', 'printer', 'metal'], step: 'concrete',
      ambientRoot: 37, ambientGain: 0.052, ambientDetune: 11, ambientBrightness: 690,
      musicRoot: 37, musicGain: 0.046, musicScale: [0, 2, 5, 9]
    },
    reactor: {
      hum: [31, 46, 92], humGain: 0.027, noiseGain: 0.052, noiseCutoff: 520,
      eventMin: 2.5, eventMax: 6.0, events: ['steam', 'turbine', 'geiger', 'metal', 'pressure'], step: 'metal',
      ambientRoot: 29, ambientGain: 0.070, ambientDetune: 5, ambientBrightness: 360,
      musicRoot: 29, musicGain: 0.060, musicScale: [0, 1, 7, 8]
    },
    womb: {
      hum: [34, 51], humGain: 0.022, noiseGain: 0.030, noiseCutoff: 430,
      eventMin: 2.8, eventMax: 6.8, events: ['wet', 'pulse', 'whisper', 'sporeHiss', 'wet'], step: 'organic',
      ambientRoot: 33, ambientGain: 0.066, ambientDetune: 17, ambientBrightness: 290,
      musicRoot: 33, musicGain: 0.056, musicScale: [0, 3, 6, 10]
    },
    silence: {
      hum: [73], humGain: 0.008, noiseGain: 0.010, noiseCutoff: 1400, highTone: 7350, highGain: 0.006,
      eventMin: 4.0, eventMax: 9.0, events: ['resonance', 'distantPulse', 'whisper'], step: 'white',
      ambientRoot: 55, ambientGain: 0.032, ambientDetune: 31, ambientBrightness: 1200,
      musicRoot: 55, musicGain: 0.030, musicScale: [0, 1, 6, 11]
    }
  }
});

export function cloneAudioConfig(value = DEFAULT_AUDIO_CONFIG) {
  return JSON.parse(JSON.stringify(value));
}

export function mergeAudioConfig(base, patch) {
  if (Array.isArray(base)) return Array.isArray(patch) ? [...patch] : [...base];
  if (!base || typeof base !== 'object') return patch ?? base;
  const out = { ...base };
  if (!patch || typeof patch !== 'object') return out;
  for (const [key, value] of Object.entries(patch)) {
    if (Array.isArray(value)) out[key] = [...value];
    else if (value && typeof value === 'object' && !Array.isArray(value)) out[key] = mergeAudioConfig(base[key] ?? {}, value);
    else out[key] = value;
  }
  return out;
}

export function normalizeAudioConfig(input = {}) {
  const merged = mergeAudioConfig(cloneAudioConfig(), input);
  merged.master = clampNumber(merged.master, 0, 1, DEFAULT_AUDIO_CONFIG.master);
  for (const key of Object.keys(DEFAULT_AUDIO_CONFIG.buses)) {
    merged.buses[key] = clampNumber(merged.buses[key], 0, 1.5, DEFAULT_AUDIO_CONFIG.buses[key]);
  }
  for (const key of Object.keys(DEFAULT_AUDIO_CONFIG.body)) {
    merged.body[key] = clampNumber(merged.body[key], 0, 2, DEFAULT_AUDIO_CONFIG.body[key]);
  }
  for (const key of Object.keys(DEFAULT_AUDIO_CONFIG.radio)) {
    merged.radio[key] = clampNumber(merged.radio[key], 0, 2, DEFAULT_AUDIO_CONFIG.radio[key]);
  }
  merged.darkAmbient.enabled = typeof merged.darkAmbient.enabled === 'boolean'
    ? merged.darkAmbient.enabled
    : DEFAULT_AUDIO_CONFIG.darkAmbient.enabled;
  merged.darkAmbient.globalGain = clampNumber(merged.darkAmbient.globalGain, 0, 1.5, DEFAULT_AUDIO_CONFIG.darkAmbient.globalGain);
  merged.darkAmbient.pulseDepth = clampNumber(merged.darkAmbient.pulseDepth, 0, 0.8, DEFAULT_AUDIO_CONFIG.darkAmbient.pulseDepth);
  merged.darkAmbient.pulseHz = clampNumber(merged.darkAmbient.pulseHz, 0.005, 0.25, DEFAULT_AUDIO_CONFIG.darkAmbient.pulseHz);
  merged.darkAmbient.noiseGain = clampNumber(merged.darkAmbient.noiseGain, 0, 0.15, DEFAULT_AUDIO_CONFIG.darkAmbient.noiseGain);
  merged.music.enabled = typeof merged.music.enabled === 'boolean' ? merged.music.enabled : DEFAULT_AUDIO_CONFIG.music.enabled;
  merged.music.globalGain = clampNumber(merged.music.globalGain, 0, 1.5, DEFAULT_AUDIO_CONFIG.music.globalGain);
  merged.music.phraseMin = clampNumber(merged.music.phraseMin, 0.3, 12, DEFAULT_AUDIO_CONFIG.music.phraseMin);
  merged.music.phraseMax = clampNumber(merged.music.phraseMax, merged.music.phraseMin + 0.1, 20, DEFAULT_AUDIO_CONFIG.music.phraseMax);
  for (const [id, defaults] of Object.entries(DEFAULT_AUDIO_CONFIG.profiles)) {
    const profile = merged.profiles[id] ?? (merged.profiles[id] = { ...defaults });
    profile.eventMin = clampNumber(profile.eventMin, 0.25, 30, defaults.eventMin);
    profile.eventMax = clampNumber(profile.eventMax, profile.eventMin + 0.05, 60, defaults.eventMax);
    profile.humGain = clampNumber(profile.humGain, 0, 0.2, defaults.humGain);
    profile.noiseGain = clampNumber(profile.noiseGain, 0, 0.2, defaults.noiseGain);
    profile.noiseCutoff = clampNumber(profile.noiseCutoff, 40, 12000, defaults.noiseCutoff);
    profile.ambientRoot = clampNumber(profile.ambientRoot, 20, 180, defaults.ambientRoot);
    profile.ambientGain = clampNumber(profile.ambientGain, 0, 0.2, defaults.ambientGain);
    profile.ambientDetune = clampNumber(profile.ambientDetune, 0, 100, defaults.ambientDetune);
    profile.ambientBrightness = clampNumber(profile.ambientBrightness, 80, 6000, defaults.ambientBrightness);
    profile.musicRoot = clampNumber(profile.musicRoot, 20, 180, defaults.musicRoot);
    profile.musicGain = clampNumber(profile.musicGain, 0, 0.15, defaults.musicGain);
    profile.musicScale = Array.isArray(profile.musicScale) && profile.musicScale.length >= 3
      ? profile.musicScale.map((note) => clampNumber(note, -24, 24, 0))
      : [...defaults.musicScale];
  }
  return merged;
}

export function loadAudioConfigFromStorage(storage = globalThis.localStorage) {
  try {
    const raw = storage?.getItem?.(AUDIO_CONFIG_STORAGE_KEY);
    return raw ? normalizeAudioConfig(JSON.parse(raw)) : cloneAudioConfig();
  } catch {
    return cloneAudioConfig();
  }
}

export function saveAudioConfigToStorage(config, storage = globalThis.localStorage) {
  const normalized = normalizeAudioConfig(config);
  storage?.setItem?.(AUDIO_CONFIG_STORAGE_KEY, JSON.stringify(normalized));
  return normalized;
}

function clampNumber(value, min, max, fallback) {
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(min, Math.min(max, n)) : fallback;
}
