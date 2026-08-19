import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { LevelFactory } from '../src/world/LevelFactory.js';
import { CollisionWorld } from '../src/world/CollisionWorld.js';
import { InteractionSystem } from '../src/world/InteractionSystem.js';
import { TriggerSystem } from '../src/world/TriggerSystem.js';
import { EventBus } from '../src/core/EventBus.js';
import { ObjectiveSystem } from '../src/game/ObjectiveSystem.js';
import { Inventory } from '../src/game/Inventory.js';
import { WeaponBelt } from '../src/game/WeaponBelt.js';
import { CraftingSystem } from '../src/game/CraftingSystem.js';
import { ProgressionSystem } from '../src/game/ProgressionSystem.js';
import { SlimeSystem } from '../src/game/SlimeSystem.js';

const PLAYER_RADIUS = 0.31;
const GRID = 0.25;

function fakeTexture() {
  return {
    repeat: { set() {} },
    needsUpdate: false,
    clone() { return fakeTexture(); }
  };
}

function createHarness() {
  const events = new EventBus();
  const collision = new CollisionWorld();
  const interactions = new InteractionSystem(events);
  const triggers = new TriggerSystem();
  const inventory = new Inventory(4);
  const belt = new WeaponBelt(events);
  const crafting = new CraftingSystem(inventory, belt, events);
  const objective = new ObjectiveSystem(events);
  const quest = new ProgressionSystem(events);
  const player = { position: new THREE.Vector3(), heal() {}, slow() {}, wailTimer: 0 };
  const scene = new THREE.Scene();
  const enemies = {
    enemies: [],
    bossPhase: 1,
    clear() { this.enemies.length = 0; },
    spawn(type, position, options = {}) {
      const enemy = {
        type,
        alive: true,
        narrativeTag: options.narrativeTag ?? null,
        group: new THREE.Group()
      };
      enemy.group.position.set(position.x, 0, position.z);
      this.enemies.push(enemy);
      return enemy;
    }
  };
  const spores = { clear() {}, spawn() {} };
  const narrative = { play() { return true; } };
  const infection = { add() {}, reduce() {} };
  const slime = new SlimeSystem({ events, infection, player, quest });
  const hud = { setInteractionPrompt() {} };
  const textures = { get() { return fakeTexture(); }, sign() { return fakeTexture(); } };

  const levelFactory = new LevelFactory({
    scene, collision, interactions, triggers, enemies, spores, events, textures,
    objective, inventory, belt, crafting, narrative, infection, player, hud, quest, slime
  });

  return {
    events, collision, interactions, triggers, inventory, belt, crafting,
    objective, quest, player, scene, enemies, spores, narrative, infection, slime,
    hud, textures, levelFactory
  };
}

function rectDistance(x, z, rect) {
  const dx = x < rect.minX ? rect.minX - x : x > rect.maxX ? x - rect.maxX : 0;
  const dz = z < rect.minZ ? rect.minZ - z : z > rect.maxZ ? z - rect.maxZ : 0;
  return Math.hypot(dx, dz);
}

function searchBounds(collision, start, target, extra = 2) {
  const xs = [start.x, target.x ?? 0];
  const zs = [start.z, target.z ?? 0];
  for (const b of collision.boxes) {
    xs.push(b.minX, b.maxX);
    zs.push(b.minZ, b.maxZ);
  }
  return {
    minX: Math.min(...xs) - extra,
    maxX: Math.max(...xs) + extra,
    minZ: Math.min(...zs) - extra,
    maxZ: Math.max(...zs) + extra
  };
}

function findPath(collision, start, { target = null, radius = 0.2, rect = null }) {
  const goalPoint = target ?? {
    x: (rect.minX + rect.maxX) * 0.5,
    z: (rect.minZ + rect.maxZ) * 0.5
  };
  const bounds = searchBounds(collision, start, goalPoint, 2.5);
  const sx = Math.round(start.x / GRID);
  const sz = Math.round(start.z / GRID);
  const key = (x, z) => `${x},${z}`;
  const point = (x, z) => ({ x: x * GRID, z: z * GRID });
  const isGoal = (x, z) => rect
    ? x >= rect.minX && x <= rect.maxX && z >= rect.minZ && z <= rect.maxZ
    : Math.hypot(x - target.x, z - target.z) <= radius;
  const heuristic = (x, z) => rect ? rectDistance(x, z, rect) : Math.hypot(x - target.x, z - target.z);

  const open = [{ x: sx, z: sz, g: 0, f: heuristic(start.x, start.z) / GRID }];
  const best = new Map([[key(sx, sz), 0]]);

  while (open.length > 0) {
    let bestIndex = 0;
    for (let i = 1; i < open.length; i++) if (open[i].f < open[bestIndex].f) bestIndex = i;
    const current = open.splice(bestIndex, 1)[0];
    const world = point(current.x, current.z);

    if (isGoal(world.x, world.z)) return new THREE.Vector3(world.x, 1.55, world.z);

    for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = current.x + dx;
      const nz = current.z + dz;
      const next = point(nx, nz);
      if (next.x < bounds.minX || next.x > bounds.maxX || next.z < bounds.minZ || next.z > bounds.maxZ) continue;
      if (collision.blocked(next.x, next.z, PLAYER_RADIUS)) continue;
      const g = current.g + 1;
      const k = key(nx, nz);
      if ((best.get(k) ?? Infinity) <= g) continue;
      best.set(k, g);
      open.push({ x: nx, z: nz, g, f: g + heuristic(next.x, next.z) / GRID });
    }
  }
  return null;
}

function interactionById(h, id) {
  const item = h.interactions.items.find((entry) => entry.id === id);
  assert.ok(item, `interaction ${id} must exist`);
  return item;
}

function triggerById(h, id) {
  const trigger = h.triggers.triggers.find((entry) => entry.id === id);
  assert.ok(trigger, `trigger ${id} must exist`);
  return trigger;
}

function reachInteraction(h, id) {
  const item = interactionById(h, id);
  const point = findPath(h.collision, h.player.position, {
    target: item.position,
    radius: Math.max(0.15, item.radius - 0.12)
  });
  assert.ok(point, `${h.levelFactory.context.id}: ${id} is unreachable from (${h.player.position.x.toFixed(2)}, ${h.player.position.z.toFixed(2)})`);
  h.player.position.copy(point);
  return item;
}

function useInteraction(h, id) {
  const item = reachInteraction(h, id);
  const input = { consume(code) { return code === 'KeyE'; } };
  h.interactions.update(h.player.position, input, h.hud);
  return item;
}

function enterTrigger(h, id) {
  const trigger = triggerById(h, id);
  const point = findPath(h.collision, h.player.position, { rect: trigger });
  assert.ok(point, `${h.levelFactory.context.id}: trigger ${id} is unreachable from (${h.player.position.x.toFixed(2)}, ${h.player.position.z.toFixed(2)})`);
  h.player.position.copy(point);
  h.triggers.update(h.player.position);
  // Teleporting from inside an onEnter callback must be observed on the next frame,
  // otherwise TriggerSystem would keep an obsolete inside=true state.
  h.triggers.update(h.player.position);
  return trigger;
}

function load(h, id) {
  const context = h.levelFactory.load(id);
  h.player.position.set(context.spawn.x, 1.55, context.spawn.z);
  assert.equal(h.collision.blocked(h.player.position.x, h.player.position.z, PLAYER_RADIUS), false, `${id}: spawn is inside collision`);
  return context;
}

function assertTransition(h, expectedFrom, expectedTo, action) {
  let transition = null;
  const off = h.events.on('level:complete', (payload) => { transition = payload; });
  action();
  off();
  assert.deepEqual(transition, { from: expectedFrom, to: expectedTo });
}

test('level 1 perimeter: pass -> physical airlock -> archive is traversable', () => {
  const h = createHarness();
  load(h, 'perimeter');
  useInteraction(h, 'shiftPass');
  assert.equal(h.quest.has('shiftPass'), true);
  const perimeterCross = triggerById(h, 'perimeterExit:cross');
  assert.equal(findPath(h.collision, h.player.position, { rect: perimeterCross }), null, 'perimeter: closed airlock must block the cross-zone');
  useInteraction(h, 'perimeterExit');
  assert.equal(h.quest.has('perimeter:exit-open'), true);
  assertTransition(h, 'perimeter', 'archive', () => enterTrigger(h, 'perimeterExit:cross'));
});

test('level 2 archive: signal -> three spatial loops -> server data -> reactor airlock is traversable', () => {
  const h = createHarness();
  h.quest.add('shiftPass');
  load(h, 'archive');

  const dataInteraction = interactionById(h, 'archiveData');
  assert.equal(findPath(h.collision, h.player.position, { target: dataInteraction.position, radius: dataInteraction.radius - 0.12 }), null,
    'archive: server room must be physically sealed before the loop resolves');

  useInteraction(h, 'signalTerminal');
  assert.equal(h.quest.has('archiveSignalLog'), true);

  for (let i = 1; i <= 3; i++) {
    enterTrigger(h, 'archiveLoop');
    assert.equal(h.quest.count('archiveLoop'), i);
  }
  assert.equal(h.quest.has('archiveLoopResolved'), true);
  assert.ok(findPath(h.collision, h.player.position, { target: dataInteraction.position, radius: dataInteraction.radius - 0.12 }),
    'archive: third loop must make the server room reachable');

  useInteraction(h, 'archiveData');
  assert.equal(h.quest.has('archiveData'), true);
  const archiveCross = triggerById(h, 'archiveExit:cross');
  assert.equal(findPath(h.collision, h.player.position, { rect: archiveCross }), null,
    'archive: reactor airlock cross-zone must be blocked before opening the door');
  useInteraction(h, 'archiveExit');
  assert.equal(h.quest.has('archive:exit-open'), true);

  assertTransition(h, 'archive', 'reactor', () => enterTrigger(h, 'archiveExit:cross'));
});

test('level 3 reactor: recursive stair -> pocket room -> core -> lower tunnel is traversable', () => {
  const h = createHarness();
  h.quest.add('shiftPass');
  h.quest.add('archiveData');
  load(h, 'reactor');

  enterTrigger(h, 'selfStair');
  assert.equal(h.quest.count('reactorStairLoops'), 1);
  enterTrigger(h, 'selfStair');
  assert.equal(h.quest.count('reactorStairLoops'), 2);

  useInteraction(h, 'reactorPortal');
  assert.equal(h.quest.has('reactorPocketEntered'), true);

  const core = h.enemies.enemies.find((enemy) => enemy.type === 'irritantCore');
  assert.ok(core);
  const coreReach = findPath(h.collision, h.player.position, { target: core.group.position, radius: 1.8 });
  assert.ok(coreReach, 'reactor: irritant core combat position must be reachable');
  h.player.position.copy(coreReach);
  h.events.emit('enemy:killed', { enemy: core, source: 'test' });
  assert.equal(h.quest.has('reactorCore'), true);

  useInteraction(h, 'pocketExit');
  assert.equal(h.quest.has('reactorPocketExited'), true);
  const reactorCross = triggerById(h, 'reactorExit:cross');
  assert.equal(findPath(h.collision, h.player.position, { rect: reactorCross }), null,
    'reactor: lower-tunnel cross-zone must be blocked before opening the door');
  useInteraction(h, 'reactorExit');
  assertTransition(h, 'reactor', 'womb', () => enterTrigger(h, 'reactorExit:cross'));
});

test('level 4 womb: impossible memory room -> dossier -> third contour is traversable', () => {
  const h = createHarness();
  h.quest.add('reactorCore');
  load(h, 'womb');

  enterTrigger(h, 'memoryPortal');
  assert.ok(h.player.position.x > 20, 'memory portal must move player into impossible room');
  useInteraction(h, 'dossier');
  assert.equal(h.quest.has('dossier'), true);
  useInteraction(h, 'memoryExit');
  assert.equal(h.quest.has('memoryRoomExited'), true);
  const wombCross = triggerById(h, 'wombExit:cross');
  assert.equal(findPath(h.collision, h.player.position, { rect: wombCross }), null,
    'womb: third-contour cross-zone must be blocked before opening the organic gate');
  useInteraction(h, 'wombExit');
  assertTransition(h, 'womb', 'silence', () => enterTrigger(h, 'wombExit:cross'));
});

test('level 5 white silence: direct choices reflect slime attunement and remain reachable', () => {
  const h = createHarness();
  h.quest.add('archiveData');
  h.quest.add('dossier');
  h.quest.increment('slimeAttunement', 2);
  load(h, 'silence');

  useInteraction(h, 'resonatorPickup');
  assert.equal(h.belt.unlocked.has('resonator'), true);

  const boss = h.enemies.enemies.find((enemy) => enemy.type === 'collective');
  assert.ok(boss);
  const combatPoint = findPath(h.collision, h.player.position, { target: boss.group.position, radius: 4.5 });
  assert.ok(combatPoint, 'silence: boss arena must be reachable');
  h.player.position.copy(combatPoint);
  h.events.emit('enemy:killed', { enemy: boss, source: 'resonator' });

  const burn = interactionById(h, 'burnChoice');
  const merge = interactionById(h, 'mergeChoice');
  const broadcast = interactionById(h, 'broadcastChoice');
  const sever = interactionById(h, 'severChoice');
  assert.equal(burn.enabled, true);
  assert.equal(merge.enabled, true, 'two or more slime contacts unlock merge');
  assert.equal(broadcast.enabled, false, 'broadcast needs at least three resonance fragments');
  assert.equal(sever.enabled, false, 'high resonance closes the sever route');
  assert.ok(findPath(h.collision, h.player.position, { target: burn.position, radius: burn.radius - 0.12 }));
  assert.ok(findPath(h.collision, h.player.position, { target: merge.position, radius: merge.radius - 0.12 }));
});

test('level 5 white silence: evidence + three slime contacts unlock the broadcast ending', () => {
  const h = createHarness();
  h.quest.add('archiveData'); h.quest.add('dossier'); h.quest.increment('slimeAttunement', 3);
  load(h, 'silence');
  const boss = h.enemies.enemies.find((enemy) => enemy.type === 'collective');
  h.events.emit('enemy:killed', { enemy: boss, source: 'resonator' });
  const broadcast = interactionById(h, 'broadcastChoice');
  assert.equal(broadcast.enabled, true);
  assert.ok(findPath(h.collision, h.player.position, { target: broadcast.position, radius: broadcast.radius - 0.12 }), 'broadcast ending must be reachable');
});

test('level 5 white silence: low resonance + evidence unlocks the sever ending', () => {
  const h = createHarness();
  h.quest.add('archiveData'); h.quest.add('dossier');
  load(h, 'silence');
  const boss = h.enemies.enemies.find((enemy) => enemy.type === 'collective');
  h.events.emit('enemy:killed', { enemy: boss, source: 'resonator' });
  const sever = interactionById(h, 'severChoice');
  assert.equal(sever.enabled, true);
  assert.ok(findPath(h.collision, h.player.position, { target: sever.position, radius: sever.radius - 0.12 }), 'sever ending must be reachable');
});



test('slime is present as gameplay state on all campaign levels', () => {
  const h = createHarness();
  for (const id of ['perimeter', 'archive', 'reactor', 'womb', 'silence']) {
    load(h, id);
    assert.ok(h.slime.zones.length >= 1, `${id}: at least one slime gameplay zone is required`);
  }
});

test('all five levels expose positional ambience emitters without changing traversal collision', () => {
  const h = createHarness();
  for (const id of ['perimeter', 'archive', 'reactor', 'womb', 'silence']) {
    const context = load(h, id);
    assert.ok(context.audio, `${id}: audio context missing`);
    assert.ok(Array.isArray(context.audio.emitters), `${id}: audio emitter list missing`);
    assert.ok(context.audio.emitters.length >= 4, `${id}: environment needs at least four acoustic landmarks`);
    for (const emitter of context.audio.emitters) {
      assert.equal(Number.isFinite(emitter.x), true, `${id}: emitter x must be finite`);
      assert.equal(Number.isFinite(emitter.z), true, `${id}: emitter z must be finite`);
      assert.equal(typeof emitter.type, 'string', `${id}: emitter type is required`);
    }
  }
});

test('level 4 optional slime pilgrimage projects narrative onto gameplay focus in order', () => {
  const h = createHarness();
  h.quest.add('reactorCore');
  load(h, 'womb');

  // The second fragment is physically present but semantically locked until the first contact.
  useInteraction(h, 'wombCall2');
  assert.equal(h.quest.has('slime:wombCall2'), false);
  assert.equal(h.slime.attunement, 0);

  useInteraction(h, 'wombCall1');
  assert.equal(h.quest.has('slime:wombCall1'), true);
  assert.equal(h.objective.id, 'wombCall2');

  useInteraction(h, 'wombCall2');
  assert.equal(h.quest.has('slime:wombCall2'), true);
  assert.equal(h.objective.id, 'wombChoir');

  useInteraction(h, 'wombChoir');
  assert.equal(h.quest.has('slime:wombChoir'), true);
  assert.equal(h.objective.id, 'memoryRoom');
  assert.equal(h.slime.attunement, 3);
});
