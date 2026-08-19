import * as THREE from 'three';

export class ObjectiveSystem {
  constructor(events) {
    this.events = events;
    this.text = '';
    this.target = null;
    this.id = null;
  }

  set(id, text, target = null) {
    this.id = id;
    this.text = text;
    this.target = target ? new THREE.Vector3(target.x, target.y ?? 0, target.z) : null;
    this.events?.emit('objective:changed', { id, text, target: this.target });
  }

  clear() {
    this.set(null, '', null);
  }
}
