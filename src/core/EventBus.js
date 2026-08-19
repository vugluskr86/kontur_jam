export class EventBus {
  #listeners = new Map();

  on(type, handler) {
    const list = this.#listeners.get(type) ?? [];
    list.push(handler);
    this.#listeners.set(type, list);
    return () => this.off(type, handler);
  }

  off(type, handler) {
    const list = this.#listeners.get(type);
    if (!list) return;
    const index = list.indexOf(handler);
    if (index >= 0) list.splice(index, 1);
  }

  emit(type, payload = undefined) {
    const list = this.#listeners.get(type);
    if (!list) return;
    for (const handler of [...list]) handler(payload);
  }

  clear() {
    this.#listeners.clear();
  }
}
