import { WEAPONS } from '../data/weapons.js';

export class WeaponBelt {
  constructor(events) {
    this.events = events;
    this.unlocked = new Set(['pm']);
    this.slots = ['pm', null];
    this.activeSlot = 0;
    this.ammo = { shells: 0, rifle: 0, fungalShell: 0, sporeCharge: 0, resonance: 0 };
  }

  unlock(id, ammo = {}) {
    if (!WEAPONS[id]) throw new Error(`Unknown weapon ${id}`);
    const firstTime = !this.unlocked.has(id);
    this.unlocked.add(id);
    for (const [type, count] of Object.entries(ammo)) this.addAmmo(type, count);
    if (id !== 'pm') {
      this.slots[1] = id;
      this.activeSlot = 1;
    }
    if (firstTime) this.events?.emit('weapon:unlocked', { id, weapon: WEAPONS[id] });
  }

  equip(slotIndex, weaponId) {
    if (slotIndex < 0 || slotIndex > 1 || !this.unlocked.has(weaponId)) return false;
    this.slots[slotIndex] = weaponId;
    this.activeSlot = slotIndex;
    this.events?.emit('weapon:equipped', { slotIndex, weaponId });
    return true;
  }

  select(slotIndex) {
    if (this.slots[slotIndex]) this.activeSlot = slotIndex;
  }

  get activeId() {
    return this.slots[this.activeSlot] ?? 'pm';
  }

  get active() {
    return WEAPONS[this.activeId];
  }

  addAmmo(type, count) {
    this.ammo[type] = (this.ammo[type] ?? 0) + count;
  }

  canFire(weapon = this.active) {
    if (!weapon.ammo) return true;
    return (this.ammo[weapon.ammo] ?? 0) > 0;
  }

  consumeAmmo(weapon = this.active) {
    if (!weapon.ammo) return true;
    if (!this.canFire(weapon)) return false;
    this.ammo[weapon.ammo]--;
    return true;
  }

  ammoFor(weapon = this.active) {
    return weapon.ammo ? (this.ammo[weapon.ammo] ?? 0) : Infinity;
  }
}
