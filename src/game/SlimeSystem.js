export class SlimeSystem {
  constructor({ events = null, infection = null, player = null, quest = null } = {}) {
    this.events = events;
    this.infection = infection;
    this.player = player;
    this.quest = quest;
    this.zones = [];
    this.activeIds = new Set();
    this.intensity = 0;
    this.hazard = 0;
  }

  clear() {
    this.zones.length = 0;
    this.activeIds.clear();
    this.intensity = 0;
    this.hazard = 0;
  }

  addZone(zone) {
    const normalized = {
      id: zone.id,
      x: zone.x ?? zone.position?.x ?? 0,
      z: zone.z ?? zone.position?.z ?? 0,
      radius: zone.radius ?? 1.2,
      kind: zone.kind ?? 'whisper',
      infectionPerSecond: zone.infectionPerSecond ?? 0,
      calmPerSecond: zone.calmPerSecond ?? 0,
      slowSeconds: zone.slowSeconds ?? 0,
      visualStrength: zone.visualStrength ?? 1,
      entered: false
    };
    this.zones.push(normalized);
    return normalized;
  }

  attune(id, { infection = 5, heal = 0, flag = null } = {}) {
    const key = `slime:${id}`;
    if (this.quest?.has(key)) return false;
    this.quest?.add(key);
    if (flag) this.quest?.add(flag);
    const value = this.quest?.increment('slimeAttunement') ?? 1;
    if (infection) this.infection?.add(infection, 'slimeAttunement');
    if (heal) this.player?.heal(heal);
    this.events?.emit('slime:attuned', { id, value });
    return true;
  }

  burn(id) {
    const key = `slime:burned:${id}`;
    if (this.quest?.has(key)) return false;
    this.quest?.add(key);
    const value = this.quest?.increment('slimeBurned') ?? 1;
    this.events?.emit('slime:burned', { id, value });
    return true;
  }

  get attunement() { return this.quest?.count('slimeAttunement') ?? 0; }
  get burned() { return this.quest?.count('slimeBurned') ?? 0; }

  update(dt, position) {
    let intensity = 0;
    let hazard = 0;
    const activeNow = new Set();
    for (const zone of this.zones) {
      const dx = position.x - zone.x;
      const dz = position.z - zone.z;
      const distance = Math.hypot(dx, dz);
      const proximity = Math.max(0, 1 - distance / Math.max(0.01, zone.radius * 1.75));
      intensity = Math.max(intensity, proximity * zone.visualStrength);
      if (distance > zone.radius) continue;
      activeNow.add(zone.id);
      if (!this.activeIds.has(zone.id)) this.events?.emit('slime:enter', { ...zone });
      if (zone.kind === 'hazard') {
        hazard = Math.max(hazard, proximity);
        if (zone.infectionPerSecond) this.infection?.add(dt * zone.infectionPerSecond, `slime:${zone.id}`);
        if (zone.slowSeconds) this.player?.slow(zone.slowSeconds);
      } else if (zone.kind === 'symbiotic') {
        if (zone.calmPerSecond) this.infection?.reduce(dt * zone.calmPerSecond, `slimeCalm:${zone.id}`);
      }
    }
    for (const id of this.activeIds) if (!activeNow.has(id)) this.events?.emit('slime:leave', { id });
    this.activeIds = activeNow;
    this.intensity += (intensity - this.intensity) * Math.min(1, dt * 5);
    this.hazard += (hazard - this.hazard) * Math.min(1, dt * 7);
    return { intensity: this.intensity, hazard: this.hazard };
  }

  endingAvailability() {
    const attunement = this.attunement;
    const evidence = Boolean(this.quest?.has('archiveData') && this.quest?.has('dossier'));
    return {
      burn: true,
      merge: attunement >= 2,
      broadcast: attunement >= 3 && evidence,
      sever: attunement <= 1 && evidence
    };
  }
}
