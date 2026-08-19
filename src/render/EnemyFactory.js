import * as THREE from 'three';
import { RETRO_PALETTE as P } from './TextureFactory.js';

function basic(color, fog = true) {
  return new THREE.MeshBasicMaterial({ color, fog });
}

function box(group, size, position, material) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
  mesh.position.set(...position);
  group.add(mesh);
  return mesh;
}

function fungalNodes(group, count, yMin = 1.1, yMax = 1.8) {
  for (let i = 0; i < count; i++) {
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.07 + (i % 2) * 0.04, 6, 4),
      basic(i % 3 === 0 ? P.lime : P.green)
    );
    mesh.position.set((Math.random() - 0.5) * 0.5, yMin + Math.random() * (yMax - yMin), (Math.random() - 0.5) * 0.35);
    group.add(mesh);
  }
}

export class EnemyFactory {
  create(type) {
    const group = new THREE.Group();
    group.userData.enemyType = type;
    const body = basic(P.steel);
    const skin = basic('#879067');
    const fungus = basic(P.lime);
    const parts = {};

    if (type === 'sporecarrier') {
      parts.torso = box(group, [0.58, 0.80, 0.34], [0, 1.12, 0], body);
      parts.head = box(group, [0.36, 0.36, 0.34], [0, 1.72, 0], skin);
      parts.armL = box(group, [0.16, 0.72, 0.18], [-0.40, 1.08, 0], skin);
      parts.armR = box(group, [0.16, 0.72, 0.18], [0.40, 1.08, 0], skin);
      parts.legL = box(group, [0.20, 0.72, 0.22], [-0.18, 0.42, 0], body);
      parts.legR = box(group, [0.20, 0.72, 0.22], [0.18, 0.42, 0], body);
      fungalNodes(group, 7);
    } else if (type === 'whipster') {
      parts.torso = box(group, [0.48, 0.88, 0.28], [0, 1.10, 0], basic(P.darkGreen));
      parts.head = box(group, [0.32, 0.30, 0.30], [0, 1.70, 0], skin);
      parts.armL = box(group, [0.12, 0.90, 0.12], [-0.36, 1.13, 0], fungus);
      parts.armR = box(group, [0.12, 0.90, 0.12], [0.36, 1.13, 0], fungus);
      parts.legL = box(group, [0.17, 0.76, 0.18], [-0.15, 0.42, 0], body);
      parts.legR = box(group, [0.17, 0.76, 0.18], [0.15, 0.42, 0], body);
      fungalNodes(group, 9);
    } else if (type === 'wailer') {
      parts.torso = box(group, [0.68, 0.72, 0.40], [0, 1.0, 0], basic(P.dark));
      parts.head = new THREE.Mesh(new THREE.SphereGeometry(0.36, 7, 5), basic(P.pale));
      parts.head.position.set(0, 1.65, 0); group.add(parts.head);
      parts.mouth = box(group, [0.30, 0.07, 0.05], [0, 1.58, -0.31], basic(P.black));
      parts.legL = box(group, [0.20, 0.68, 0.22], [-0.20, 0.38, 0], body);
      parts.legR = box(group, [0.20, 0.68, 0.22], [0.20, 0.38, 0], body);
      fungalNodes(group, 10, 1.3, 2.0);
    } else if (type === 'hive') {
      const core = new THREE.Mesh(new THREE.SphereGeometry(0.72, 8, 6), basic(P.brown));
      core.position.y = 1.1; core.scale.set(0.85, 1.35, 0.85); group.add(core); parts.torso = core;
      parts.legL = box(group, [0.30, 0.85, 0.32], [-0.30, 0.42, 0], basic(P.darkBrown));
      parts.legR = box(group, [0.30, 0.85, 0.32], [0.30, 0.42, 0], basic(P.darkBrown));
      fungalNodes(group, 22, 0.7, 2.0);
    } else if (type === 'irritantCore') {
      const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.9, 1), basic(P.rust));
      core.position.y = 1.2; group.add(core); parts.torso = core;
      for (let i = 0; i < 10; i++) {
        const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.13, 1.2, 5), fungus);
        stalk.position.set(Math.cos(i * 0.63) * 0.75, 1.2, Math.sin(i * 0.63) * 0.75);
        stalk.rotation.z = Math.PI / 2.7; stalk.rotation.y = i * 0.63; group.add(stalk);
      }
    } else if (type === 'collective') {
      const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.25, 2), basic(P.white));
      core.position.y = 1.55; group.add(core); parts.torso = core;
      const inner = new THREE.Mesh(new THREE.IcosahedronGeometry(0.62, 1), basic(P.lime));
      inner.position.y = 1.55; group.add(inner); parts.inner = inner;
      for (let i = 0; i < 12; i++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(1.45 + (i % 3) * 0.15, 0.035, 4, 24), basic(i % 2 ? P.pale : P.green));
        ring.position.y = 1.55; ring.rotation.x = Math.random() * Math.PI; ring.rotation.y = Math.random() * Math.PI; group.add(ring);
      }
    }

    return { group, parts };
  }
}
