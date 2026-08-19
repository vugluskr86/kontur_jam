export class Inventory {
  constructor(capacity = 4) {
    this.capacity = capacity;
    this.slots = Array.from({ length: capacity }, () => null);
  }

  find(itemId) {
    return this.slots.find((slot) => slot?.id === itemId) ?? null;
  }

  count(itemId) {
    return this.find(itemId)?.count ?? 0;
  }

  canAdd(itemId) {
    return Boolean(this.find(itemId) || this.slots.some((slot) => slot === null));
  }

  add(itemId, count = 1, meta = {}) {
    if (count <= 0) return true;
    const existing = this.find(itemId);
    if (existing) {
      existing.count += count;
      return true;
    }
    const empty = this.slots.findIndex((slot) => slot === null);
    if (empty < 0) return false;
    this.slots[empty] = { id: itemId, count, ...meta };
    return true;
  }

  remove(itemId, count = 1) {
    const index = this.slots.findIndex((slot) => slot?.id === itemId);
    if (index < 0) return false;
    const slot = this.slots[index];
    if (slot.count < count) return false;
    slot.count -= count;
    if (slot.count <= 0) this.slots[index] = null;
    return true;
  }

  has(itemId, count = 1) {
    return this.count(itemId) >= count;
  }

  snapshot() {
    return this.slots.map((slot) => slot ? { ...slot } : null);
  }
}
