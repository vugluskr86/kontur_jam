const TRANSITIONS = Object.freeze({
  perimeter: Object.freeze({ to: 'archive', requires: ['shiftPass'] }),
  archive: Object.freeze({ to: 'reactor', requires: ['archiveData'] }),
  reactor: Object.freeze({ to: 'womb', requires: ['reactorCore'] }),
  womb: Object.freeze({ to: 'silence', requires: ['dossier'] })
});

export class ProgressionSystem {
  constructor(events = null) {
    this.events = events;
    this.flags = new Set();
    this.counters = new Map();
  }

  add(flag) {
    if (this.flags.has(flag)) return false;
    this.flags.add(flag);
    this.events?.emit('progression:flag', { flag });
    return true;
  }

  has(flag) {
    return this.flags.has(flag);
  }

  delete(flag) {
    return this.flags.delete(flag);
  }

  increment(counter, amount = 1) {
    const value = (this.counters.get(counter) ?? 0) + amount;
    this.counters.set(counter, value);
    this.events?.emit('progression:counter', { counter, value });
    return value;
  }

  count(counter) {
    return this.counters.get(counter) ?? 0;
  }

  transitionContract(from) {
    return TRANSITIONS[from] ?? null;
  }

  missingForTransition(from, to = null) {
    const contract = TRANSITIONS[from];
    if (!contract || (to && contract.to !== to)) return ['invalid-transition'];
    return contract.requires.filter((flag) => !this.flags.has(flag));
  }

  canTransition(from, to = null) {
    return this.missingForTransition(from, to).length === 0;
  }

  assertTransition(from, to) {
    const missing = this.missingForTransition(from, to);
    if (missing.length > 0) {
      const error = new Error(`Transition ${from} -> ${to} blocked: ${missing.join(', ')}`);
      error.code = 'PROGRESSION_GATE';
      error.missing = missing;
      throw error;
    }
    return true;
  }

  snapshot() {
    return {
      flags: [...this.flags].sort(),
      counters: Object.fromEntries([...this.counters.entries()].sort(([a], [b]) => a.localeCompare(b)))
    };
  }
}

export { TRANSITIONS as LEVEL_TRANSITIONS };
