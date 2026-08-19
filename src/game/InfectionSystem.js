export class InfectionSystem {
  constructor(events) {
    this.events = events;
    this.value = 0;
    this.inhalerPulse = 0;
    this.hudLieTimer = 0;
    this.lastTier = 0;
  }

  add(amount, reason = 'exposure') {
    const before = this.value;
    this.value = Math.max(0, Math.min(100, this.value + amount));
    if (this.value !== before) this.events?.emit('infection:changed', { value: this.value, reason });
    this.#checkTier();
  }

  reduce(amount, reason = 'treatment') {
    this.add(-amount, reason);
  }

  useInhaler() {
    this.reduce(32, 'inhaler');
    this.inhalerPulse = 5;
    this.hudLieTimer = 3.2;
    this.events?.emit('infection:inhaler', { value: this.value });
  }

  update(dt) {
    this.inhalerPulse = Math.max(0, this.inhalerPulse - dt);
    this.hudLieTimer = Math.max(0, this.hudLieTimer - dt);
  }

  get tier() {
    if (this.value >= 80) return 4;
    if (this.value >= 60) return 3;
    if (this.value >= 40) return 2;
    if (this.value >= 20) return 1;
    return 0;
  }

  get distortion() {
    return Math.min(1, this.value / 100 + (this.inhalerPulse > 0 ? 0.18 : 0));
  }

  get hudIsLying() {
    return this.hudLieTimer > 0 || this.value >= 72;
  }

  #checkTier() {
    const tier = this.tier;
    if (tier !== this.lastTier) {
      this.events?.emit('infection:tier', { from: this.lastTier, to: tier, value: this.value });
      this.lastTier = tier;
    }
  }
}
