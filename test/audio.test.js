import test from 'node:test';
import assert from 'node:assert/strict';
import { AUDIO_PROFILES, AudioSystem } from '../src/audio/AudioSystem.js';
import { EventBus } from '../src/core/EventBus.js';
import { NarrativeDirector } from '../src/game/NarrativeDirector.js';

const LEVELS = ['perimeter', 'archive', 'reactor', 'womb', 'silence'];

test('every campaign level has a distinct procedural audio profile', () => {
  for (const id of LEVELS) {
    const profile = AUDIO_PROFILES[id];
    assert.ok(profile, `${id}: audio profile missing`);
    assert.ok(profile.events.length >= 3, `${id}: ambience needs at least three event types`);
    assert.ok(profile.eventMax > profile.eventMin, `${id}: ambient timing range must be non-zero`);
    assert.ok(profile.step, `${id}: footstep material is required`);
  }
  assert.notDeepEqual(AUDIO_PROFILES.perimeter.events, AUDIO_PROFILES.womb.events);
  assert.notDeepEqual(AUDIO_PROFILES.archive.events, AUDIO_PROFILES.silence.events);
});

test('AudioSystem accepts level/state updates before browser AudioContext is unlocked', () => {
  const audio = new AudioSystem({ random: () => 0.5 });
  assert.doesNotThrow(() => audio.setLevel('reactor', { emitters: [{ type: 'steam', x: 2, z: 3 }] }));
  assert.doesNotThrow(() => audio.update(0.016, {
    position: { x: 0, z: 0 }, yaw: 0, health: 8, maxHealth: 8,
    infection: 0.2, danger: 0.4, moving: true, paused: false, dead: false
  }));
  assert.equal(audio.levelId, 'reactor');
});

test('NarrativeDirector emits per-line timing so radio squelch can follow messages', () => {
  const events = new EventBus();
  const hud = { showSubtitle() {}, hideSubtitle() {} };
  const narrative = new NarrativeDirector(events, hud);
  const lines = [];
  events.on('narrative:line', (payload) => lines.push(payload));
  assert.equal(narrative.play('perimeter', 'intro'), true);
  assert.equal(lines.length, 1);
  assert.equal(lines[0].speaker, 'К.О.Н.Т.У.Р.');
  assert.ok(lines[0].duration >= 2.4);
});

import {
  AUDIO_CONFIG_STORAGE_KEY,
  DEFAULT_AUDIO_CONFIG,
  loadAudioConfigFromStorage,
  normalizeAudioConfig,
  saveAudioConfigToStorage
} from '../src/audio/audioConfig.js';

test('audio preset JSON is normalized before runtime use', () => {
  const config = normalizeAudioConfig({
    master: 99,
    buses: { ambience: -4 },
    profiles: { reactor: { eventMin: 7, eventMax: 2, ambientRoot: 5 } }
  });
  assert.equal(config.master, 1);
  assert.equal(config.buses.ambience, 0);
  assert.ok(config.profiles.reactor.eventMax > config.profiles.reactor.eventMin);
  assert.equal(config.profiles.reactor.ambientRoot, 20);
  assert.deepEqual(config.profiles.perimeter.events, DEFAULT_AUDIO_CONFIG.profiles.perimeter.events);
});

test('audio sandbox preset can round-trip through localStorage-compatible storage', () => {
  const memory = new Map();
  const storage = {
    getItem(key) { return memory.get(key) ?? null; },
    setItem(key, value) { memory.set(key, value); }
  };
  const saved = saveAudioConfigToStorage({ master: 0.31, darkAmbient: { globalGain: 0.9 } }, storage);
  assert.ok(memory.has(AUDIO_CONFIG_STORAGE_KEY));
  const loaded = loadAudioConfigFromStorage(storage);
  assert.equal(loaded.master, 0.31);
  assert.equal(loaded.darkAmbient.globalGain, 0.9);
  assert.deepEqual(loaded, saved);
});

test('AudioSystem hot-applies sandbox configuration before audio unlock', () => {
  const audio = new AudioSystem();
  const result = audio.setConfig({ master: 0.27, profiles: { womb: { ambientRoot: 41 } } });
  assert.equal(result.master, 0.27);
  assert.equal(result.profiles.womb.ambientRoot, 41);
  assert.equal(result.profiles.archive.ambientRoot, DEFAULT_AUDIO_CONFIG.profiles.archive.ambientRoot);
});
