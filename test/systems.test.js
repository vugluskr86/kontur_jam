import test from 'node:test';
import assert from 'node:assert/strict';
import { Inventory } from '../src/game/Inventory.js';
import { WeaponBelt } from '../src/game/WeaponBelt.js';
import { CraftingSystem } from '../src/game/CraftingSystem.js';
import { InfectionSystem } from '../src/game/InfectionSystem.js';

const noEvents = { emit() {} };

test('critical resource stack remains in one of four inventory slots', () => {
  const inventory = new Inventory(4);
  assert.equal(inventory.add('spores', 1, { name: 'СПОРЫ О-41' }), true);
  assert.equal(inventory.add('spores', 3, { name: 'СПОРЫ О-41' }), true);
  assert.equal(inventory.count('spores'), 4);
  assert.equal(inventory.slots.filter(Boolean).length, 1);
});

test('inhaler consumes two spores and occupies a backpack slot', () => {
  const inventory = new Inventory(4);
  const belt = new WeaponBelt(noEvents);
  const crafting = new CraftingSystem(inventory, belt, noEvents);
  inventory.add('spores', 4, { name: 'СПОРЫ О-41' });
  crafting.unlock('inhaler');
  assert.equal(crafting.craft('inhaler'), true);
  assert.equal(inventory.count('spores'), 2);
  assert.equal(inventory.count('inhaler'), 1);
});

test('fungal ammo is a tactical resource, separately tracked from bullets', () => {
  const inventory = new Inventory(4);
  const belt = new WeaponBelt(noEvents);
  const crafting = new CraftingSystem(inventory, belt, noEvents);
  inventory.add('spores', 6, { name: 'СПОРЫ О-41' });
  crafting.unlock('fungalShell');
  assert.equal(crafting.craft('fungalShell'), true);
  assert.equal(belt.ammo.fungalShell, 1);
  assert.equal(belt.ammo.rifle, 0);
  assert.equal(inventory.count('spores'), 3);
});

test('infection has four escalating distortion tiers', () => {
  const infection = new InfectionSystem(noEvents);
  infection.add(19); assert.equal(infection.tier, 0);
  infection.add(1); assert.equal(infection.tier, 1);
  infection.add(20); assert.equal(infection.tier, 2);
  infection.add(20); assert.equal(infection.tier, 3);
  infection.add(20); assert.equal(infection.tier, 4);
});

test('fungal launcher is crafted from spores and then equipped on the two-slot belt', () => {
  const inventory = new Inventory(4);
  const belt = new WeaponBelt(noEvents);
  const crafting = new CraftingSystem(inventory, belt, noEvents);
  inventory.add('spores', 4, { name: 'СПОРЫ О-41' });
  crafting.unlock('fungusLauncher');
  assert.equal(crafting.craft('fungusLauncher'), true);
  assert.equal(belt.unlocked.has('fungus'), true);
  assert.equal(belt.slots[1], 'fungus');
  assert.equal(belt.ammo.fungalShell, 1);
});
