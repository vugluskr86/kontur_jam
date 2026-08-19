export const RECIPES = {
  fungusLauncher: {
    id: 'fungusLauncher', name: 'ГРИБНОЙ ГРАНАТОМЁТ', requiresUnlock: 'fungusLauncher', cost: { spores: 4 }, output: { weapon: 'fungus', ammo: 'fungalShell', count: 1 }
  },
  inhaler: {
    id: 'inhaler', name: 'ИНГАЛЯТОР', requiresUnlock: 'inhaler', cost: { spores: 2 }, output: { item: 'inhaler', count: 1 }
  },
  fungalShell: {
    id: 'fungalShell', name: 'ГРИБНОЙ ЗАРЯД', requiresUnlock: 'fungalShell', cost: { spores: 3 }, output: { ammo: 'fungalShell', count: 1 }
  },
  shield: {
    id: 'shield', name: 'МИЦЕЛИЕВЫЙ ЩИТ', requiresUnlock: 'shield', cost: { spores: 4 }, output: { item: 'shield', count: 1 }
  },
  drillCharge: {
    id: 'drillCharge', name: 'ПОДЗАРЯДКА БУРА', requiresUnlock: 'drillCharge', cost: { spores: 1 }, output: { ammo: 'sporeCharge', count: 2 }
  }
};

export class CraftingSystem {
  constructor(inventory, belt, events) {
    this.inventory = inventory;
    this.belt = belt;
    this.events = events;
    this.unlocked = new Set();
  }

  unlock(id) {
    if (this.unlocked.has(id)) return;
    this.unlocked.add(id);
    this.events?.emit('craft:unlocked', { id, recipe: RECIPES[id] });
  }

  canCraft(id) {
    const recipe = RECIPES[id];
    if (!recipe || !this.unlocked.has(recipe.requiresUnlock)) return false;
    return Object.entries(recipe.cost).every(([itemId, count]) => this.inventory.has(itemId, count));
  }

  craft(id) {
    const recipe = RECIPES[id];
    if (!recipe || !this.canCraft(id)) return false;
    for (const [itemId, count] of Object.entries(recipe.cost)) this.inventory.remove(itemId, count);
    if (recipe.output.item) {
      if (!this.inventory.add(recipe.output.item, recipe.output.count, { name: recipe.name })) {
        for (const [itemId, count] of Object.entries(recipe.cost)) this.inventory.add(itemId, count, { name: 'СПОРЫ О-41' });
        return false;
      }
    }
    if (recipe.output.weapon) this.belt.unlock(recipe.output.weapon);
    if (recipe.output.ammo) this.belt.addAmmo(recipe.output.ammo, recipe.output.count);
    this.events?.emit('craft:completed', { id, recipe });
    return true;
  }
}
