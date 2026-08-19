export const WEAPONS = {
  pm: {
    id: 'pm', name: 'ТАБЕЛЬНЫЙ ПМ', short: 'ПМ', kind: 'hitscan', damage: 1,
    cooldown: 0.28, range: 20, spread: 0.006, ammo: null, pellets: 1
  },
  shotgun: {
    id: 'shotgun', name: 'ОБРЕЗ / ИЖ', short: 'ИЖ', kind: 'hitscan', damage: 1.15,
    cooldown: 0.78, range: 9, spread: 0.075, ammo: 'shells', pellets: 7
  },
  ak: {
    id: 'ak', name: 'АК-ОБРАЗНАЯ', short: 'АК', kind: 'hitscan', damage: 0.72,
    cooldown: 0.105, range: 24, spread: 0.018, ammo: 'rifle', pellets: 1, automatic: true
  },
  arcCutter: {
    id: 'arcCutter', name: 'ARC CUTTER', short: 'ARC', kind: 'arc', damage: 2.1,
    cooldown: 0.34, range: 15, spread: 0.012, ammo: 'cells', pellets: 1
  },
  flamethrower: {
    id: 'flamethrower', name: 'FLAMETHROWER P-041', short: 'FIRE', kind: 'flame', damage: 0.56,
    cooldown: 0.075, range: 7.2, spread: 0.20, ammo: 'fuel', pellets: 1, automatic: true
  },
  fungus: {
    id: 'fungus', name: 'ГРИБНОЙ ГРАНАТОМЁТ', short: 'О-ГР', kind: 'fungalProjectile', damage: 0,
    cooldown: 0.85, range: 15, spread: 0, ammo: 'fungalShell', pellets: 1
  },
  drill: {
    id: 'drill', name: 'МИЦЕЛИЕВЫЙ БУР', short: 'БУР', kind: 'melee', damage: 3.4,
    cooldown: 0.58, range: 2.2, spread: 0, ammo: 'sporeCharge', pellets: 1
  },
  resonator: {
    id: 'resonator', name: 'РЕЗОНАТОР', short: 'РЕЗ', kind: 'resonator', damage: 2.2,
    cooldown: 0.22, range: 28, spread: 0.002, ammo: 'resonance', pellets: 1, automatic: true
  }
};

export const AMMO_LABELS = {
  cells: 'ARC', fuel: 'FUEL',
  shells: '12К', rifle: '5.45', fungalShell: 'О-41', sporeCharge: 'СП', resonance: 'РЕЗ'
};
