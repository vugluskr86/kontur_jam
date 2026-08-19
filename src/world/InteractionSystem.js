import * as THREE from 'three';

export class InteractionSystem {
  constructor(events) {
    this.events = events;
    this.items = [];
    this.tmp = new THREE.Vector3();
  }

  clear() {
    this.items.length = 0;
  }

  add({ id, position, radius = 1.1, mode = 'interact', prompt = 'E — ВЗАИМОДЕЙСТВИЕ', enabled = true, onUse }) {
    const item = {
      id,
      position: position.clone ? position.clone() : new THREE.Vector3(position.x, position.y ?? 0, position.z),
      radius,
      mode,
      prompt,
      enabled,
      consumed: false,
      onUse
    };
    this.items.push(item);
    return item;
  }

  update(playerPosition, input, hud) {
    let nearest = null;
    let nearestDist = Infinity;

    for (const item of this.items) {
      if (!item.enabled || item.consumed) continue;
      this.tmp.copy(playerPosition).sub(item.position);
      this.tmp.y = 0;
      const dist = this.tmp.length();
      if (dist > item.radius) continue;

      if (item.mode === 'pickup') {
        const consumed = item.onUse?.(item) !== false;
        if (consumed) {
          item.consumed = true;
          this.events?.emit('interaction:used', { id: item.id, mode: item.mode });
        }
        continue;
      }

      if (dist < nearestDist) {
        nearest = item;
        nearestDist = dist;
      }
    }

    hud.setInteractionPrompt(nearest?.prompt ?? '');
    if (nearest && input.consume('KeyE')) {
      const consumed = nearest.onUse?.(nearest) === true;
      if (consumed) nearest.consumed = true;
      this.events?.emit('interaction:used', { id: nearest.id, mode: nearest.mode });
    }
  }
}
