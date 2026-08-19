export class TriggerSystem {
  constructor() {
    this.triggers = [];
  }

  clear() {
    this.triggers.length = 0;
  }

  add({ id, minX, maxX, minZ, maxZ, once = true, onEnter }) {
    const trigger = { id, minX, maxX, minZ, maxZ, once, onEnter, inside: false, consumed: false };
    this.triggers.push(trigger);
    return trigger;
  }

  update(position) {
    for (const trigger of this.triggers) {
      if (trigger.consumed) continue;
      const inside = position.x >= trigger.minX && position.x <= trigger.maxX && position.z >= trigger.minZ && position.z <= trigger.maxZ;
      if (inside && !trigger.inside) {
        trigger.onEnter?.(trigger);
        if (trigger.once) trigger.consumed = true;
      }
      trigger.inside = inside;
    }
  }
}
