import test from 'node:test';
import assert from 'node:assert/strict';
import { ProgressionSystem, LEVEL_TRANSITIONS } from '../src/game/ProgressionSystem.js';

const noEvents = { emit() {} };

test('every campaign transition has an explicit prerequisite contract', () => {
  assert.deepEqual(Object.keys(LEVEL_TRANSITIONS), ['perimeter', 'archive', 'reactor', 'womb']);
  assert.deepEqual(LEVEL_TRANSITIONS.perimeter, { to: 'archive', requires: ['shiftPass'] });
  assert.deepEqual(LEVEL_TRANSITIONS.archive, { to: 'reactor', requires: ['archiveData'] });
  assert.deepEqual(LEVEL_TRANSITIONS.reactor, { to: 'womb', requires: ['reactorCore'] });
  assert.deepEqual(LEVEL_TRANSITIONS.womb, { to: 'silence', requires: ['dossier'] });
});

test('campaign exits remain blocked until their mandatory story state exists', () => {
  const p = new ProgressionSystem(noEvents);
  assert.equal(p.canTransition('perimeter', 'archive'), false);
  p.add('shiftPass');
  assert.equal(p.canTransition('perimeter', 'archive'), true);

  assert.equal(p.canTransition('archive', 'reactor'), false);
  p.add('archiveData');
  assert.equal(p.canTransition('archive', 'reactor'), true);

  assert.equal(p.canTransition('reactor', 'womb'), false);
  p.add('reactorCore');
  assert.equal(p.canTransition('reactor', 'womb'), true);

  assert.equal(p.canTransition('womb', 'silence'), false);
  p.add('dossier');
  assert.equal(p.canTransition('womb', 'silence'), true);
});

test('wrong destination cannot accidentally satisfy a transition', () => {
  const p = new ProgressionSystem(noEvents);
  p.add('archiveData');
  assert.equal(p.canTransition('archive', 'womb'), false);
  assert.deepEqual(p.missingForTransition('archive', 'womb'), ['invalid-transition']);
});

test('non-euclidean loop progress is deterministic and persists as campaign state', () => {
  const p = new ProgressionSystem(noEvents);
  assert.equal(p.increment('archiveLoop'), 1);
  assert.equal(p.increment('archiveLoop'), 2);
  assert.equal(p.increment('archiveLoop'), 3);
  assert.equal(p.count('archiveLoop'), 3);
});
