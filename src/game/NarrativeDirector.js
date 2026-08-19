import { NARRATIVE } from '../data/narrative.js';

export class NarrativeDirector {
  constructor(events, hud) {
    this.events = events;
    this.hud = hud;
    this.queue = [];
    this.current = null;
    this.timer = 0;
    this.seen = new Set();
  }

  play(levelId, beatId, { once = true } = {}) {
    const key = `${levelId}:${beatId}`;
    if (once && this.seen.has(key)) return false;
    const lines = NARRATIVE[levelId]?.[beatId];
    if (!lines) return false;
    if (once) this.seen.add(key);
    this.queue.push(...lines.map((line) => ({ ...line, key })));
    if (!this.current) this.#next();
    this.events?.emit('narrative:beat', { levelId, beatId });
    return true;
  }

  update(dt) {
    if (!this.current) return;
    this.timer -= dt;
    if (this.timer <= 0) this.#next();
  }

  skip() {
    if (this.current) this.#next();
  }

  interrupt() {
    this.queue.length = 0;
    this.current = null;
    this.timer = 0;
    this.hud.hideSubtitle();
  }

  #next() {
    this.current = this.queue.shift() ?? null;
    if (!this.current) {
      this.hud.hideSubtitle();
      return;
    }
    const readingTime = Math.max(2.4, Math.min(7.5, this.current.text.length * 0.052));
    this.timer = readingTime;
    this.hud.showSubtitle(this.current.speaker, this.current.text);
  }
}
