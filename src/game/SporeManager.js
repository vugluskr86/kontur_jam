import * as THREE from 'three';
import { RETRO_PALETTE as P } from '../render/TextureFactory.js';

export class SporeManager {
  constructor({ scene, inventory, infection, events }) {
    this.scene = scene;
    this.inventory = inventory;
    this.infection = infection;
    this.events = events;
    this.items = [];
    this.geometry = new THREE.SphereGeometry(0.19, 7, 5);
    this.material = new THREE.MeshBasicMaterial({ color: P.lime, fog: true });
    this.coreMaterial = new THREE.MeshBasicMaterial({ color: P.yellow, fog: true });
  }

  clear() {
    for (const item of this.items) this.scene.remove(item.group);
    this.items.length = 0;
  }

  spawn(position, count = 1) {
    for (let i = 0; i < count; i++) {
      const group = new THREE.Group();
      group.add(new THREE.Mesh(this.geometry, this.material));
      const core = new THREE.Mesh(new THREE.SphereGeometry(0.065, 5, 4), this.coreMaterial);
      group.add(core);
      group.position.set(position.x + (Math.random() - 0.5) * 0.65, 0.28, position.z + (Math.random() - 0.5) * 0.65);
      group.userData.phase = Math.random() * Math.PI * 2;
      this.scene.add(group);
      this.items.push({ group });
    }
  }

  update(time, playerPosition) {
    for (let i = this.items.length - 1; i >= 0; i--) {
      const item = this.items[i];
      const k = 1 + Math.sin(time * 4 + item.group.userData.phase) * 0.15;
      item.group.scale.setScalar(k);
      item.group.rotation.y = time * 0.6;
      const dx = playerPosition.x - item.group.position.x;
      const dz = playerPosition.z - item.group.position.z;
      if (dx * dx + dz * dz > 0.75 * 0.75) continue;
      if (!this.inventory.add('spores', 1, { name: 'СПОРЫ О-41' })) {
        this.events.emit('inventory:full', { item: 'spores' });
        continue;
      }
      this.infection.add(1.5, 'sporePickup');
      this.events.emit('spore:collected', { total: this.inventory.count('spores') });
      this.scene.remove(item.group);
      this.items.splice(i, 1);
    }
  }
}
