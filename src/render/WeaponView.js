import * as THREE from 'three';
import { RETRO_PALETTE as P } from './TextureFactory.js';

const mat = (color) => new THREE.MeshBasicMaterial({ color, fog: false, depthTest: false, depthWrite: false });

function mesh(group, geo, material, x, y, z, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geo, material);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.renderOrder = 1000;
  group.add(m);
  return m;
}

export class WeaponView {
  constructor(camera) {
    this.camera = camera;
    this.root = new THREE.Group();
    this.root.position.set(0.42, -0.36, -0.72);
    this.camera.add(this.root);
    this.current = null;
    this.muzzle = null;
    this.muzzleTimer = 0;
    this.bob = 0;
    this.show('pm');
  }

  show(id) {
    if (id === this.current) return;
    this.current = id;
    this.root.clear();
    this.muzzle = null;

    const steel = mat(P.light);
    const dark = mat(P.dark);
    const brown = mat(P.brown);
    const green = mat(P.green);
    const pale = mat(P.pale);
    const orange = mat(P.orange);

    if (id === 'pm') {
      mesh(this.root, new THREE.BoxGeometry(0.25, 0.15, 0.58), steel, 0, 0.06, -0.1);
      mesh(this.root, new THREE.BoxGeometry(0.11, 0.10, 0.32), dark, 0, 0.05, -0.52);
      mesh(this.root, new THREE.BoxGeometry(0.17, 0.34, 0.19), brown, 0, -0.17, 0.02, -0.20);
      this.muzzle = mesh(this.root, new THREE.BoxGeometry(0.13, 0.13, 0.09), orange, 0, 0.05, -0.72);
    } else if (id === 'shotgun') {
      mesh(this.root, new THREE.BoxGeometry(0.18, 0.15, 0.78), dark, 0, 0.03, -0.20);
      mesh(this.root, new THREE.BoxGeometry(0.23, 0.16, 0.35), brown, 0, 0.01, 0.18);
      mesh(this.root, new THREE.BoxGeometry(0.17, 0.31, 0.20), brown, 0, -0.18, 0.19, -0.18);
      this.muzzle = mesh(this.root, new THREE.BoxGeometry(0.19, 0.15, 0.08), orange, 0, 0.03, -0.63);
    } else if (id === 'ak') {
      mesh(this.root, new THREE.BoxGeometry(0.22, 0.19, 0.72), dark, 0, 0.02, -0.14);
      mesh(this.root, new THREE.BoxGeometry(0.09, 0.09, 0.55), steel, 0, 0.04, -0.70);
      mesh(this.root, new THREE.BoxGeometry(0.17, 0.35, 0.19), brown, 0, -0.20, 0.03, -0.20);
      mesh(this.root, new THREE.BoxGeometry(0.22, 0.26, 0.15), brown, 0, -0.18, -0.22, 0.35);
      this.muzzle = mesh(this.root, new THREE.BoxGeometry(0.13, 0.13, 0.08), orange, 0, 0.04, -0.99);
    } else if (id === 'fungus') {
      mesh(this.root, new THREE.CylinderGeometry(0.14, 0.18, 0.72, 7), green, 0, 0.02, -0.18, Math.PI / 2);
      mesh(this.root, new THREE.SphereGeometry(0.20, 7, 5), pale, 0, 0.04, -0.55);
      mesh(this.root, new THREE.BoxGeometry(0.17, 0.35, 0.20), brown, 0, -0.22, 0.05, -0.15);
      this.muzzle = mesh(this.root, new THREE.SphereGeometry(0.12, 6, 4), orange, 0, 0.04, -0.78);
    } else if (id === 'drill') {
      mesh(this.root, new THREE.BoxGeometry(0.26, 0.30, 0.48), dark, 0, -0.02, -0.08);
      mesh(this.root, new THREE.ConeGeometry(0.14, 0.68, 8), pale, 0, 0.02, -0.57, Math.PI / 2);
      mesh(this.root, new THREE.SphereGeometry(0.10, 6, 4), green, 0.16, 0.10, -0.05);
    } else if (id === 'resonator') {
      mesh(this.root, new THREE.BoxGeometry(0.28, 0.22, 0.55), pale, 0, 0.01, -0.12);
      mesh(this.root, new THREE.TorusGeometry(0.19, 0.045, 5, 16), green, 0, 0.05, -0.47, Math.PI / 2);
      mesh(this.root, new THREE.BoxGeometry(0.16, 0.35, 0.18), dark, 0, -0.20, 0.05, -0.18);
      this.muzzle = mesh(this.root, new THREE.SphereGeometry(0.11, 6, 4), P.white ? mat(P.white) : pale, 0, 0.05, -0.70);
    }
    if (this.muzzle) this.muzzle.visible = false;
  }

  flash() {
    if (!this.muzzle) return;
    this.muzzle.visible = true;
    this.muzzleTimer = 0.055;
  }

  update(dt, moving) {
    this.muzzleTimer = Math.max(0, this.muzzleTimer - dt);
    if (this.muzzle && this.muzzleTimer <= 0) this.muzzle.visible = false;
    this.bob += dt * (moving ? 10 : 3);
    this.root.position.y = -0.36 + Math.sin(this.bob) * (moving ? 0.012 : 0.003);
    this.root.position.x = 0.42 + Math.cos(this.bob * 0.5) * (moving ? 0.008 : 0.002);
  }
}
