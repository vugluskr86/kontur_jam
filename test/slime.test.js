import test from 'node:test';
import assert from 'node:assert/strict';
import { SlimeSystem } from '../src/game/SlimeSystem.js';
import { ProgressionSystem } from '../src/game/ProgressionSystem.js';
import { EventBus } from '../src/core/EventBus.js';

function harness() {
  const events = new EventBus();
  const quest = new ProgressionSystem(events);
  const calls = { add: [], reduce: [], slow: [], heal: [] };
  const infection = {
    add(value, source) { calls.add.push({ value, source }); },
    reduce(value, source) { calls.reduce.push({ value, source }); }
  };
  const player = {
    slow(seconds) { calls.slow.push(seconds); },
    heal(value) { calls.heal.push(value); }
  };
  const slime = new SlimeSystem({ events, infection, player, quest });
  return { events, quest, infection, player, slime, calls };
}

test('slime attunement is idempotent and becomes campaign state', () => {
  const h = harness();
  const attuned = [];
  h.events.on('slime:attuned', (payload) => attuned.push(payload));

  assert.equal(h.slime.attune('archiveConduit', { infection: 7, heal: 1 }), true);
  assert.equal(h.slime.attune('archiveConduit', { infection: 7, heal: 1 }), false);
  assert.equal(h.quest.has('slime:archiveConduit'), true);
  assert.equal(h.slime.attunement, 1);
  assert.equal(attuned.length, 1);
  assert.equal(h.calls.add.length, 1);
  assert.equal(h.calls.heal.length, 1);
});

test('hazard and symbiotic slime have opposite gameplay effects', () => {
  const h = harness();
  h.slime.addZone({ id: 'hot', x: 0, z: 0, radius: 2, kind: 'hazard', infectionPerSecond: 6, slowSeconds: 0.2 });
  h.slime.addZone({ id: 'quiet', x: 10, z: 0, radius: 2, kind: 'symbiotic', calmPerSecond: 2 });

  h.slime.update(0.5, { x: 0, z: 0 });
  assert.equal(h.calls.add.length, 1);
  assert.equal(h.calls.add[0].value, 3);
  assert.equal(h.calls.slow.length, 1);
  assert.ok(h.slime.hazard > 0);

  h.slime.update(0.5, { x: 10, z: 0 });
  assert.equal(h.calls.reduce.length, 1);
  assert.equal(h.calls.reduce[0].value, 1);
});

test('ending routes are derived from evidence and slime resonance', () => {
  const h = harness();
  assert.deepEqual(h.slime.endingAvailability(), { burn: true, merge: false, broadcast: false, sever: false });

  h.quest.add('archiveData');
  h.quest.add('dossier');
  assert.equal(h.slime.endingAvailability().sever, true);

  h.slime.attune('one', { infection: 0 });
  assert.equal(h.slime.endingAvailability().sever, true);
  assert.equal(h.slime.endingAvailability().merge, false);

  h.slime.attune('two', { infection: 0 });
  assert.equal(h.slime.endingAvailability().merge, true);
  assert.equal(h.slime.endingAvailability().sever, false);

  h.slime.attune('three', { infection: 0 });
  assert.equal(h.slime.endingAvailability().broadcast, true);
});
