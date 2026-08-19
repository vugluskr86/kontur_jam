import * as THREE from 'three';
import { RETRO_PALETTE as P } from '../render/TextureFactory.js';

const LEVEL_ORDER = ['perimeter', 'archive', 'reactor', 'womb', 'silence'];

export class LevelFactory {
  constructor(deps) {
    Object.assign(this, deps);
    this.root = null;
    this.subscriptions = [];
    this.animations = [];
    this.context = null;
  }

  load(id) {
    this.dispose();
    this.root = new THREE.Group();
    this.root.name = `level:${id}`;
    this.scene.add(this.root);
    this.context = { id, time: 0, update: () => {} };

    this.collision.clear();
    this.interactions.clear();
    this.triggers.clear();
    this.enemies.clear();
    this.spores.clear();
    this.slime?.clear();
    this.animations.length = 0;

    const method = this[`_${id}`];
    if (!method) throw new Error(`Unknown level: ${id}`);
    const setup = method.call(this);
    Object.assign(this.context, setup);
    return this.context;
  }

  dispose() {
    for (const unsubscribe of this.subscriptions.splice(0)) unsubscribe();
    if (this.root) this.scene.remove(this.root);
    this.root = null;
  }

  update(dt) {
    if (!this.context) return;
    this.context.time += dt;
    for (const animation of this.animations) animation(dt, this.context.time);
    this.context.update?.(dt, this.context.time);
  }

  nextLevel(id) {
    const index = LEVEL_ORDER.indexOf(id);
    return index >= 0 && index < LEVEL_ORDER.length - 1 ? LEVEL_ORDER[index + 1] : null;
  }

  #on(event, handler) {
    this.subscriptions.push(this.events.on(event, handler));
  }

  #material(textureKind, color = null) {
    const map = textureKind ? this.textures.get(textureKind).clone() : null;
    if (map) map.needsUpdate = true;
    return new THREE.MeshBasicMaterial({
      map,
      color: color ?? 0xffffff,
      fog: true
    });
  }

  #floor(width, depth, materialKind = 'floor', x = 0, z = 0) {
    const material = this.#material(materialKind);
    if (material.map) material.map.repeat.set(Math.max(1, width / 2), Math.max(1, depth / 2));
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, depth), material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(x, 0, z);
    this.root.add(mesh);
    return mesh;
  }

  #ceiling(width, depth, materialKind = 'ceiling', x = 0, z = 0, y = 3.2) {
    const material = this.#material(materialKind);
    if (material.map) material.map.repeat.set(Math.max(1, width / 2), Math.max(1, depth / 2));
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, depth), material);
    mesh.rotation.x = Math.PI / 2;
    mesh.position.set(x, y, z);
    this.root.add(mesh);
    return mesh;
  }

  #wall(x, z, width, depth, { height = 3.2, material = 'industrialWall', collide = true, tag = 'wall' } = {}) {
    const mat = this.#material(material);
    if (mat.map) mat.map.repeat.set(Math.max(1, width / 2), Math.max(1, height / 2));
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), mat);
    mesh.position.set(x, height / 2, z);
    this.root.add(mesh);
    const collider = collide ? this.collision.addBox(x, z, width, depth, tag) : null;
    return { mesh, collider };
  }

  #crate(x, z, scale = 0.8) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(scale, scale, scale), this.#material('crate'));
    mesh.position.set(x, scale / 2, z);
    this.root.add(mesh);
    this.collision.addBox(x, z, scale, scale, 'crate');
    return mesh;
  }

  #server(x, z, ry = 0) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.9, 2.1, 0.55), this.#material('server'));
    mesh.position.set(x, 1.05, z);
    mesh.rotation.y = ry;
    this.root.add(mesh);
    const sx = Math.abs(Math.cos(ry)) > 0.5 ? 0.9 : 0.55;
    const sz = Math.abs(Math.cos(ry)) > 0.5 ? 0.55 : 0.9;
    this.collision.addBox(x, z, sx, sz, 'server');
    return mesh;
  }

  #sign(text, subtitle, x, y, z, ry = 0) {
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.65), new THREE.MeshBasicMaterial({ map: this.textures.sign(text, subtitle), fog: true }));
    mesh.position.set(x, y, z);
    mesh.rotation.y = ry;
    this.root.add(mesh);
    return mesh;
  }

  #door(x, z, ry = 0, material = 'door') {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(2.8, 2.7, 0.28), this.#material(material));
    mesh.position.set(x, 1.35, z);
    mesh.rotation.y = ry;
    this.root.add(mesh);
    const width = Math.abs(Math.cos(ry)) > 0.7 ? 2.8 : 0.34;
    const depth = Math.abs(Math.cos(ry)) > 0.7 ? 0.34 : 2.8;
    const collider = this.collision.addBox(x, z, width, depth, 'door');
    return { mesh, collider, open: false };
  }

  #openDoor(door) {
    if (door.open) return;
    door.open = true;
    door.collider.active = false;
    this.animations.push((dt) => {
      if (door.mesh.position.y < 4.3) door.mesh.position.y += dt * 2.9;
    });
  }

  #installExitGate({ id, from, to, door, interactPosition, crossZone, prompt, lockedMessage, objectiveText }) {
    let armed = false;
    const crossTarget = new THREE.Vector3(
      (crossZone.minX + crossZone.maxX) * 0.5,
      0,
      (crossZone.minZ + crossZone.maxZ) * 0.5
    );

    this.interactions.add({
      id,
      position: interactPosition,
      radius: 1.35,
      prompt,
      onUse: () => {
        if (!this.quest.canTransition(from, to)) {
          this.events.emit('ui:message', lockedMessage ?? 'ПЕРЕХОД ЗАБЛОКИРОВАН: НЕ ВЫПОЛНЕНА ЦЕЛЬ');
          return false;
        }
        armed = true;
        this.quest.add(`${from}:exit-open`);
        this.#openDoor(door);
        this.objective.set(`${id}:cross`, objectiveText ?? 'ПРОЙТИ ЧЕРЕЗ ОТКРЫТЫЙ ШЛЮЗ', crossTarget);
        this.events.emit('level:exit-opened', { from, to, id });
        return true;
      }
    });

    this.triggers.add({
      id: `${id}:cross`,
      ...crossZone,
      once: true,
      onEnter: () => {
        if (!armed || !this.quest.canTransition(from, to)) return;
        this.quest.assertTransition(from, to);
        this.events.emit('level:complete', { from, to });
      }
    });

    return { isArmed: () => armed, crossTarget };
  }

  #pickupMesh(kind, position) {
    let mesh;
    const mat = (color) => new THREE.MeshBasicMaterial({ color, fog: true });
    if (kind === 'pass') {
      mesh = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.05, 0.35), mat(P.yellow));
    } else if (kind === 'weapon') {
      mesh = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.18, 0.25), mat(P.pale));
    } else if (kind === 'dossier') {
      mesh = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.05, 0.5), mat(P.rust));
    } else {
      mesh = new THREE.Mesh(new THREE.OctahedronGeometry(0.22), mat(P.orange));
    }
    mesh.position.copy(position);
    this.root.add(mesh);
    this.animations.push((dt, time) => {
      if (!mesh.parent) return;
      mesh.rotation.y += dt * 0.7;
      mesh.position.y = position.y + Math.sin(time * 2.5) * 0.04;
    });
    return mesh;
  }

  #fungusPatch(x, z, count = 16, organic = false) {
    const group = new THREE.Group();
    const matA = new THREE.MeshBasicMaterial({ color: organic ? P.rust : P.green, fog: true });
    const matB = new THREE.MeshBasicMaterial({ color: P.lime, fog: true });
    for (let i = 0; i < count; i++) {
      const r = 0.07 + Math.random() * 0.16;
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 6, 4), i % 4 === 0 ? matB : matA);
      mesh.position.set((Math.random() - 0.5) * 1.2, r * 0.6, (Math.random() - 0.5) * 1.2);
      mesh.scale.y = 0.4 + Math.random() * 0.8;
      group.add(mesh);
    }
    group.position.set(x, 0, z);
    this.root.add(group);
    if (organic) this.animations.push((dt, time) => group.scale.setScalar(1 + Math.sin(time * 1.6 + x) * 0.025));
    return group;
  }

  #slimePool(id, x, z, radius = 1.0, { kind = 'hazard', infectionPerSecond = 4.0, calmPerSecond = 0, slowSeconds = 0.18, color = P.green, visualStrength = 1 } = {}) {
    const group = new THREE.Group();
    const dark = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.52, fog: true, depthWrite: false });
    const bright = new THREE.MeshBasicMaterial({ color: P.lime, transparent: true, opacity: 0.42, fog: true, depthWrite: false });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(radius * 2, radius * 1.4), dark);
    floor.rotation.x = -Math.PI / 2; floor.position.y = 0.018; floor.scale.y = 0.70; group.add(floor);
    for (let i = 0; i < 9; i++) {
      const r = radius * (0.12 + Math.random() * 0.16);
      const blob = new THREE.Mesh(new THREE.SphereGeometry(r, 7, 4), i % 4 === 0 ? bright : dark);
      const a = Math.random() * Math.PI * 2; const d = Math.random() * radius * 0.70;
      blob.position.set(Math.cos(a) * d, 0.025 + r * 0.24, Math.sin(a) * d);
      blob.scale.y = 0.18 + Math.random() * 0.18; group.add(blob);
    }
    group.position.set(x, 0, z); this.root.add(group);
    this.animations.push((dt, time) => {
      const pulse = 1 + Math.sin(time * 1.7 + x * 0.2 + z * 0.1) * 0.025;
      group.scale.set(pulse, 1, pulse);
      bright.opacity = 0.31 + (Math.sin(time * 2.4 + z) * 0.5 + 0.5) * 0.16;
    });
    this.slime?.addZone({ id, x, z, radius, kind, infectionPerSecond, calmPerSecond, slowSeconds, visualStrength });
    return group;
  }

  #slimeNode(id, position, { prompt = 'E — КОСНУТЬСЯ О-41', infection = 6, heal = 0, guard = null, lockedMessage = 'СИГНАЛ НЕ СИНХРОНИЗИРОВАН', onAttune = null } = {}) {
    const marker = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.24, 1),
      new THREE.MeshBasicMaterial({ color: P.lime, fog: true, transparent: true, opacity: 0.78 })
    );
    marker.position.copy(position); marker.position.y = Math.max(0.22, position.y ?? 0.22); this.root.add(marker);
    this.animations.push((dt, time) => { if (marker.parent) { marker.rotation.y += dt * 0.6; marker.scale.setScalar(0.88 + Math.sin(time * 2.3 + position.x) * 0.12); } });
    return this.interactions.add({ id, position, radius: 1.15, prompt, onUse: () => {
      if (!this.slime) return false;
      if (guard && !guard()) { this.events.emit('ui:message', lockedMessage); return false; }
      const changed = this.slime.attune(id, { infection, heal });
      if (changed) onAttune?.();
      marker.visible = !this.quest.has(`slime:${id}`);
      return true;
    }});
  }

  #ceilingLamp(x, z, { color = P.pale, width = 1.35, flicker = false, y = 3.10 } = {}) {
    const group = new THREE.Group();
    const housing = new THREE.Mesh(new THREE.BoxGeometry(width + 0.16, 0.08, 0.34), new THREE.MeshBasicMaterial({ color: P.dark, fog: true }));
    const panel = new THREE.Mesh(new THREE.BoxGeometry(width, 0.035, 0.25), new THREE.MeshBasicMaterial({ color, fog: true }));
    panel.position.y = -0.055;
    group.add(housing, panel);
    group.position.set(x, y, z);
    this.root.add(group);
    if (flicker) this.animations.push((dt, time) => { panel.visible = Math.sin(time * 21 + z) > -0.72; });
    return group;
  }

  #pipeRun(x, z, length, { axis = 'z', count = 3, y = 2.62, spacing = 0.18, color = P.slate } = {}) {
    const group = new THREE.Group();
    const material = new THREE.MeshBasicMaterial({ color, fog: true });
    for (let i = 0; i < count; i++) {
      const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, length, 6), material);
      if (axis === 'z') {
        pipe.rotation.x = Math.PI / 2;
        pipe.position.x = (i - (count - 1) / 2) * spacing;
      } else {
        pipe.rotation.z = Math.PI / 2;
        pipe.position.z = (i - (count - 1) / 2) * spacing;
      }
      group.add(pipe);
    }
    group.position.set(x, y, z);
    this.root.add(group);
    return group;
  }

  #puddle(x, z, width = 1.2, depth = 0.7, color = P.steel) {
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(width, depth),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.34, fog: true })
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(x, 0.012, z);
    this.root.add(mesh);
    return mesh;
  }

  #bench(x, z, ry = 0, color = P.brown) {
    const group = new THREE.Group();
    const material = new THREE.MeshBasicMaterial({ color, fog: true });
    const seat = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.12, 0.42), material); seat.position.y = 0.48; group.add(seat);
    for (const lx of [-0.68, 0.68]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.48, 0.10), material); leg.position.set(lx, 0.24, 0); group.add(leg);
    }
    group.position.set(x, 0, z); group.rotation.y = ry; this.root.add(group); return group;
  }

  #lockerRow(x, z, count = 3, ry = 0) {
    const group = new THREE.Group();
    const material = new THREE.MeshBasicMaterial({ color: P.steel, fog: true });
    const seam = new THREE.MeshBasicMaterial({ color: P.dark, fog: true });
    for (let i = 0; i < count; i++) {
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.48, 1.75, 0.42), material);
      body.position.set((i - (count - 1) / 2) * 0.52, 0.875, 0); group.add(body);
      const slot = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.035, 0.025), seam);
      slot.position.set(body.position.x, 1.34, 0.225); group.add(slot);
    }
    group.position.set(x, 0, z); group.rotation.y = ry; this.root.add(group); return group;
  }

  #vent(x, z, { y = 0.04, color = P.dark } = {}) {
    const group = new THREE.Group();
    const material = new THREE.MeshBasicMaterial({ color, fog: true });
    for (let i = -2; i <= 2; i++) {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.025, 0.65), material);
      bar.position.x = i * 0.14; group.add(bar);
    }
    group.position.set(x, y, z); this.root.add(group); return group;
  }

  #organicPods(x, z, count = 7, scale = 1) {
    const group = new THREE.Group();
    const dark = new THREE.MeshBasicMaterial({ color: P.rust, fog: true });
    const bright = new THREE.MeshBasicMaterial({ color: P.orange, fog: true });
    for (let i = 0; i < count; i++) {
      const pod = new THREE.Mesh(new THREE.SphereGeometry((0.20 + Math.random() * 0.18) * scale, 7, 5), i % 3 === 0 ? bright : dark);
      pod.position.set((Math.random() - 0.5) * 1.6, 0.35 + Math.random() * 1.65, (Math.random() - 0.5) * 0.55);
      pod.scale.y = 1.35 + Math.random() * 0.8;
      group.add(pod);
    }
    group.position.set(x, 0, z); this.root.add(group);
    this.animations.push((dt, time) => { group.scale.setScalar(1 + Math.sin(time * 1.55 + x * 0.3) * 0.018); });
    return group;
  }

  #floatingFragments(cx, cz, count = 14, radius = 9) {
    const group = new THREE.Group();
    const material = new THREE.MeshBasicMaterial({ color: P.light, fog: true });
    for (let i = 0; i < count; i++) {
      const a = i / count * Math.PI * 2;
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.18 + Math.random() * 0.42, 0.18 + Math.random() * 0.7, 0.12 + Math.random() * 0.25), material.clone());
      mesh.position.set(cx + Math.sin(a) * (radius + Math.random() * 2), 0.7 + Math.random() * 2.4, cz + Math.cos(a) * (radius + Math.random() * 2));
      mesh.rotation.y = a; group.add(mesh);
      this.animations.push((dt, time) => {
        mesh.rotation.y += dt * (0.08 + (i % 3) * 0.025);
        mesh.position.y += Math.sin(time * 0.7 + i) * dt * 0.012;
      });
    }
    this.root.add(group); return group;
  }

  #setScene(background, fogNear, fogFar) {
    this.scene.background = new THREE.Color(background);
    this.scene.fog = new THREE.Fog(background, fogNear, fogFar);
  }

  _perimeter() {
    this.#setScene(0x0d1617, 6, 22);
    this.#floor(18, 30, 'floor'); this.#ceiling(18, 30);
    this.#wall(-9.1, 0, 0.35, 30.2); this.#wall(9.1, 0, 0.35, 30.2);
    this.#wall(0, 15.1, 18.2, 0.35); this.#wall(0, -15.1, 18.2, 0.35);
    this.#wall(-3.25, 10.6, 0.35, 8.5); this.#wall(3.25, 10.6, 0.35, 8.5);
    this.#wall(-2.85, 2.0, 0.35, 8.9); this.#wall(2.85, 2.0, 0.35, 8.9);
    this.#wall(-5.8, -3.95, 6.0, 0.35); this.#wall(5.8, -3.95, 6.0, 0.35);
    this.#wall(-6.2, -8.0, 0.35, 8.2); this.#wall(6.2, -8.0, 0.35, 8.2);
    this.#wall(-6.0, 4.2, 5.9, 0.35); this.#wall(-6.0, -0.3, 5.9, 0.35); this.#wall(-8.75, 2.0, 0.35, 4.8);
    this.#sign('КПП / 041', '1-Й КОНТУР', 0, 2.3, 7.7);
    this.#sign('СТОЛОВАЯ', 'СЕКТОР А', 2.60, 2.0, 1.0, -Math.PI / 2);
    this.#sign('ОБЩЕЖИТИЕ', 'БЛОК 3', -2.60, 2.0, 1.0, Math.PI / 2);
    this.#crate(-1.9, 11.5, 0.9); this.#crate(1.9, 8.6, 0.8); this.#crate(-4.8, -7.2, 1.0);
    this.#fungusPatch(2.1, 5.8); this.#fungusPatch(-4.8, -5.4, 20);
    this.#slimePool('perimeterDrain', 1.8, 4.9, 1.05, { kind: 'hazard', infectionPerSecond: 5.2, slowSeconds: 0.20, color: P.green });
    this.#slimePool('perimeterQuiet', -5.9, 2.25, 0.9, { kind: 'symbiotic', calmPerSecond: 0.55, slowSeconds: 0, color: P.steel, visualStrength: 0.75 });
    for (const z of [12, 8, 4, 0, -4, -8]) this.#ceilingLamp(0, z, { flicker: z === -4 });
    this.#pipeRun(-2.72, 5.8, 14, { axis: 'z', count: 3, y: 2.72 });
    this.#pipeRun(2.72, 5.8, 14, { axis: 'z', count: 2, y: 2.78, color: P.rust });
    this.#bench(-7.15, 2.3, Math.PI / 2);
    this.#lockerRow(-7.55, 0.55, 3, Math.PI / 2);
    this.#puddle(0.85, -2.4, 1.5, 0.7);
    this.#vent(2.05, 6.8);

    this.#wall(-5.25, -12.2, 7.5, 0.35, { material: 'industrialWall' });
    this.#wall(5.25, -12.2, 7.5, 0.35, { material: 'industrialWall' });
    const exitDoor = this.#door(0, -12.2);
    const passPos = new THREE.Vector3(-4.25, 0.42, -9.1);
    const passMesh = this.#pickupMesh('pass', passPos);
    const shotgunPos = new THREE.Vector3(4.25, 0.42, -7.7);
    const shotgunMesh = this.#pickupMesh('weapon', shotgunPos);

    this.enemies.spawn('sporecarrier', { x: 0.2, z: 3.0 });
    this.enemies.spawn('sporecarrier', { x: -4.0, z: -6.8 });
    this.enemies.spawn('sporecarrier', { x: 4.0, z: -9.2 });
    this.spores.spawn(new THREE.Vector3(1.4, 0, 7.0), 1);

    const perimeterEchoPos = new THREE.Vector3(-5.9, 0.24, 2.25);
    this.#slimeNode('perimeterEcho', perimeterEchoPos, { infection: 5, heal: 0.5, onAttune: () => {
      this.narrative.play('perimeter', 'slimeEcho');
      this.events.emit('ui:message', 'О-41 // ОБРАЗ ПЕРЕДАН: КЛЮЧ / НИЖНИЙ СЕКТОР');
    }});

    this.objective.set('findPass', 'НАЙТИ ПРОПУСК НАЧАЛЬНИКА СМЕНЫ', passPos);
    this.narrative.play('perimeter', 'intro');

    this.interactions.add({ id: 'shiftPass', position: passPos, radius: 1.05, mode: 'pickup', onUse: () => {
      if (this.quest.has('shiftPass')) return true;
      this.quest.add('shiftPass');
      passMesh.removeFromParent();
      this.events.emit('quest:pickup', { id: 'shiftPass' });
      this.narrative.play('perimeter', 'pass');
      this.objective.set('airlock', 'ВЕРНУТЬСЯ К ШЛЮЗУ ВО 2-Й СЕКТОР', new THREE.Vector3(0, 0, -12.2));
      return true;
    }});

    this.interactions.add({ id: 'shotgunPickup', position: shotgunPos, radius: 1.0, mode: 'pickup', onUse: () => {
      if (this.belt.unlocked.has('shotgun')) return true;
      this.belt.unlock('shotgun', { shells: 8 });
      shotgunMesh.removeFromParent();
      return true;
    }});

    this.#installExitGate({
      id: 'perimeterExit', from: 'perimeter', to: 'archive', door: exitDoor,
      interactPosition: new THREE.Vector3(0, 0, -10.9),
      crossZone: { minX: -1.25, maxX: 1.25, minZ: -14.45, maxZ: -12.8 },
      prompt: 'E — ПРОПУСК / ОТКРЫТЬ ШЛЮЗ',
      lockedMessage: 'ТРЕБУЕТСЯ ПРОПУСК НАЧАЛЬНИКА СМЕНЫ',
      objectiveText: 'ПРОЙТИ ЧЕРЕЗ ШЛЮЗ В АРХИВ'
    });

    let firstSpore = true;
    this.#on('spore:collected', () => {
      if (!firstSpore) return;
      firstSpore = false;
      this.crafting.unlock('inhaler');
      this.narrative.play('perimeter', 'firstSpore');
    });

    let flickerTimer = 2.8;
    let hallucinationTimer = 8.5;
    return {
      spawn: { x: 0, z: 12.4 }, yaw: Math.PI,
      audio: { emitters: [
        { type: 'fluorescent', x: 0, z: -4 }, { type: 'drip', x: 0.85, z: -2.4 },
        { type: 'metal', x: -7.1, z: 2.3 }, { type: 'ghostRadio', x: 2.6, z: -5.0 },
        { type: 'relay', x: 0, z: 7.5 }
      ] },
      update: (dt) => {
        flickerTimer -= dt;
        hallucinationTimer -= dt;
        if (flickerTimer <= 0) {
          this.events.emit('world:flicker', { strength: 0.55 });
          flickerTimer = 4.0 + Math.random() * 5.0;
        }
        if (hallucinationTimer <= 0) {
          this.events.emit('audio:hallucination');
          hallucinationTimer = 10 + Math.random() * 9;
        }
      }
    };
  }

  _archive() {
    this.#setScene(0x07110f, 5, 18);
    this.#floor(16, 32, 'floor'); this.#ceiling(16, 32, 'ceiling');
    this.#wall(-8.1, 0, 0.35, 32.2, { material: 'archiveWall' }); this.#wall(8.1, 0, 0.35, 32.2, { material: 'archiveWall' });
    this.#wall(0, 16.1, 16.2, 0.35, { material: 'archiveWall' }); this.#wall(0, -16.1, 16.2, 0.35, { material: 'archiveWall' });
    this.#wall(-3.2, 5.0, 0.35, 21.8, { material: 'archiveWall' }); this.#wall(3.2, 5.0, 0.35, 21.8, { material: 'archiveWall' });
    this.#sign('АРХИВ', 'МАШИННЫЙ ФОНД 041', 0, 2.25, 10.5);
    for (const z of [8, 5, 2, -1, -4]) { this.#server(-2.4, z, Math.PI / 2); this.#server(2.4, z, -Math.PI / 2); }
    this.#fungusPatch(-1.8, -7, 18);
    this.#slimePool('archiveConduitPool', -1.4, -6.7, 0.95, { kind: 'symbiotic', calmPerSecond: 0.35, slowSeconds: 0, color: P.green, visualStrength: 0.9 });
    for (const z of [13, 10, 7, 4, 1, -2, -5, -9, -12]) this.#ceilingLamp(0, z, { width: 1.0, flicker: z === -9 });
    this.#pipeRun(-3.0, 2.0, 22, { axis: 'z', count: 4, y: 2.82, spacing: 0.12, color: P.dark });
    this.#pipeRun(3.0, 2.0, 22, { axis: 'z', count: 4, y: 2.82, spacing: 0.12, color: P.dark });
    this.#puddle(-1.15, -5.4, 1.0, 0.55, P.dark);
    this.#vent(-1.8, 7.2); this.#vent(1.8, 7.2);

    const terminalPos = new THREE.Vector3(0, 0, 8.5);
    const terminalMesh = this.#server(0, 8.8, 0);
    this.#wall(3.15, -10.45, 0.35, 3.1, { material: 'archiveWall' });
    const sideDoor = this.#door(3.15, -7.5, Math.PI / 2);
    const dataPos = new THREE.Vector3(5.5, 0, -8.0);
    const akPos = new THREE.Vector3(7.0, 0.45, -7.2);
    const akMesh = this.#pickupMesh('weapon', akPos);
    this.#floor(8, 8, 'floor', 5.0, -8.0); this.#ceiling(8, 8, 'ceiling', 5.0, -8.0);
    this.#wall(5.0, -12.0, 8, 0.35, { material: 'archiveWall' }); this.#wall(8.9, -8.0, 0.35, 8, { material: 'archiveWall' });
    this.#server(5.5, -8.4, 0); this.#server(7.3, -8.4, 0);
    this.#wall(-4.75, -13.45, 6.5, 0.35, { material: 'archiveWall' });
    this.#wall(4.75, -13.45, 6.5, 0.35, { material: 'archiveWall' });
    const archiveExitDoor = this.#door(0, -13.45);

    this.enemies.spawn('sporecarrier', { x: -1.0, z: 1.0 });
    this.enemies.spawn('whipster', { x: 1.2, z: -3.0 });
    this.enemies.spawn('sporecarrier', { x: 5.0, z: -9.5 });
    this.spores.spawn(new THREE.Vector3(-1.3, 0, -4.5), 2);

    this.objective.set('signalLog', 'НАЙТИ ЗАПИСЬ ОБ О-41', terminalPos);
    this.narrative.play('archive', 'intro');

    const archiveConduitPos = new THREE.Vector3(-1.4, 0.24, -6.7);
    this.#slimeNode('archiveConduit', archiveConduitPos, { infection: 6, guard: () => this.quest.has('archiveSignalLog'), lockedMessage: 'СНАЧАЛА ПРОСЛУШАЙТЕ ЗАПИСЬ', onAttune: () => {
      this.narrative.play('archive', 'slimeConduit');
      this.events.emit('ui:message', 'О-41 // ТОПОЛОГИЯ СИНХРОНИЗИРОВАНА');
    }});

    let loopCount = this.quest.count('archiveLoop');

    this.interactions.add({ id: 'signalTerminal', position: terminalPos, radius: 1.2, prompt: 'E — ВОСПРОИЗВЕСТИ АУДИОЗАПИСЬ', onUse: () => {
      if (this.quest.has('archiveSignalLog')) return true;
      this.quest.add('archiveSignalLog');
      this.narrative.play('archive', 'signalLog');
      this.crafting.unlock('fungusLauncher');
      this.crafting.unlock('fungalShell');
      this.objective.set('archiveLoop', 'ПРОВЕРИТЬ КОРИДОР, КОТОРЫЙ НЕ СОВПАДАЕТ С ПЛАНОМ', new THREE.Vector3(0, 0, -10.8));
      return true;
    }});

    this.triggers.add({ id: 'archiveLoop', minX: -2.6, maxX: 2.6, minZ: -11.45, maxZ: -10.15, once: false, onEnter: () => {
      if (!this.quest.has('archiveSignalLog') || this.quest.has('archiveData')) return;
      if (this.quest.has('archiveLoopResolved')) return;
      loopCount = this.quest.increment('archiveLoop');
      if (loopCount === 1) this.narrative.play('archive', 'loop1');
      if (loopCount === 2) this.narrative.play('archive', 'loop2');
      const requiredLoops = this.quest.has('slime:archiveConduit') ? 2 : 3;
      if (loopCount < requiredLoops) {
        this.player.position.set(0, 1.55, 3.8);
        this.events.emit('world:teleport', { kind: 'loop', count: loopCount });
      } else {
        this.quest.add('archiveLoopResolved');
        this.#openDoor(sideDoor);
        this.objective.set('archiveData', 'БОКОВАЯ СЕРВЕРНАЯ СТАЛА ДОСТУПНА', dataPos);
      }
    }});

    this.interactions.add({ id: 'archiveData', position: dataPos, radius: 1.2, prompt: 'E — ИЗВЛЕЧЬ ДАННЫЕ О-41', onUse: () => {
      if (this.quest.has('archiveData')) return true;
      if (!this.quest.has('archiveLoopResolved')) {
        this.events.emit('ui:message', 'СЕРВЕРНАЯ НЕСОВМЕСТИМА С ТЕКУЩЕЙ ТОПОЛОГИЕЙ');
        return false;
      }
      this.quest.add('archiveData');
      this.events.emit('quest:pickup', { id: 'archiveData' });
      this.objective.set('archiveExit', 'ОТКРЫТЬ ШЛЮЗ РЕАКТОРНОГО БЛОКА', new THREE.Vector3(0, 0, -12.2));
      return true;
    }});


    this.interactions.add({ id: 'akPickup', position: akPos, radius: 1.0, mode: 'pickup', onUse: () => {
      if (this.belt.unlocked.has('ak')) return true;
      this.belt.unlock('ak', { rifle: 45 });
      akMesh.removeFromParent();
      return true;
    }});

    this.#installExitGate({
      id: 'archiveExit', from: 'archive', to: 'reactor', door: archiveExitDoor,
      interactPosition: new THREE.Vector3(0, 0, -12.15),
      crossZone: { minX: -1.25, maxX: 1.25, minZ: -15.35, maxZ: -13.9 },
      prompt: 'E — ОТКРЫТЬ ШЛЮЗ РЕАКТОРНОГО БЛОКА',
      lockedMessage: 'СНАЧАЛА ИЗВЛЕКИТЕ АРХИВНЫЕ ДАННЫЕ',
      objectiveText: 'ВОЙТИ В РЕАКТОРНЫЙ БЛОК'
    });

    return {
      spawn: { x: 0, z: 13.8 }, yaw: Math.PI,
      audio: { emitters: [
        { type: 'server', x: -2.4, z: 5 }, { type: 'server', x: 2.4, z: -1 },
        { type: 'tape', x: 0, z: 8.8 }, { type: 'relay', x: 5.5, z: -8.4 },
        { type: 'printer', x: 7.3, z: -8.4 }
      ] }
    };
  }

  _reactor() {
    this.#setScene(0x0a0e0d, 1.0, 4.8);
    this.#floor(18, 30, 'floor'); this.#ceiling(18, 30, 'ceiling');
    this.#wall(-9.1, 0, 0.35, 30.2, { material: 'reactorWall' }); this.#wall(9.1, 0, 0.35, 30.2, { material: 'reactorWall' });
    this.#wall(0, 15.1, 18.2, 0.35, { material: 'reactorWall' }); this.#wall(0, -15.1, 18.2, 0.35, { material: 'reactorWall' });
    this.#wall(-3.0, 4.8, 0.35, 14, { material: 'reactorWall' }); this.#wall(3.0, 4.8, 0.35, 14, { material: 'reactorWall' });
    this.#wall(-6.0, -5.0, 6.2, 0.35, { material: 'reactorWall' }); this.#wall(6.0, -5.0, 6.2, 0.35, { material: 'reactorWall' });
    this.#sign('РЕАКТОР', 'БЛОК Р-7', 0, 2.25, 10.8);
    this.#wall(-5.25, -13.1, 7.5, 0.35, { material: 'reactorWall' });
    this.#wall(5.25, -13.1, 7.5, 0.35, { material: 'reactorWall' });
    const reactorExitDoor = this.#door(0, -13.1, 0, 'reactorWall');
    for (const x of [-6, 6]) for (const z of [-9, -3, 3]) {
      const mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.7, 2.8, 8), new THREE.MeshBasicMaterial({ color: P.slate, fog: true }));
      mesh.position.set(x, 1.4, z); this.root.add(mesh); this.collision.addBox(x, z, 1.1, 1.1, 'reactor');
    }
    for (const z of [12, 8, 4, 0, -4, -8, -11]) this.#ceilingLamp(0, z, { color: z < 0 ? P.orange : P.pale, width: 1.1, flicker: z === 0 });
    this.#pipeRun(-7.35, -1.0, 23, { axis: 'z', count: 4, y: 2.55, spacing: 0.16, color: P.rust });
    this.#pipeRun(7.35, -1.0, 23, { axis: 'z', count: 4, y: 2.55, spacing: 0.16, color: P.steel });
    this.#pipeRun(0, -4.55, 5.5, { axis: 'x', count: 3, y: 2.75, spacing: 0.16, color: P.dark });
    this.#vent(5.9, -3.0); this.#vent(-5.8, -8.8);
    this.#puddle(4.6, -6.2, 1.8, 0.7, P.slate);
    this.#slimePool('reactorHotSlime', 4.7, -6.2, 1.1, { kind: 'hazard', infectionPerSecond: 7.0, slowSeconds: 0.25, color: P.rust, visualStrength: 1.1 });
    this.#slimePool('reactorQuietSlime', -5.7, -8.7, 1.0, { kind: 'symbiotic', calmPerSecond: 0.85, slowSeconds: 0, color: P.green, visualStrength: 0.9 });

    this.enemies.spawn('whipster', { x: 0.8, z: 5.0 });
    this.enemies.spawn('wailer', { x: -1.0, z: -1.5 });
    this.enemies.spawn('whipster', { x: 5.0, z: -8.0 });

    // Pocket room: physically far from the corridor, entered through a portal door.
    this.#floor(10, 10, 'floor', 28, 0); this.#ceiling(10, 10, 'ceiling', 28, 0);
    this.#wall(23, 0, 0.35, 10, { material: 'reactorWall' }); this.#wall(33, 0, 0.35, 10, { material: 'reactorWall' });
    this.#wall(28, 5, 10, 0.35, { material: 'reactorWall' }); this.#wall(28, -5, 10, 0.35, { material: 'reactorWall' });
    const core = this.enemies.spawn('irritantCore', { x: 28, z: -1.3 }, { narrativeTag: 'irritantCore' });
    const portalDoorPos = new THREE.Vector3(0, 0, -4.0);
    const exitPos = new THREE.Vector3(28, 0, -4.2);

    this.narrative.play('reactor', 'intro');
    const reactorVeilPos = new THREE.Vector3(-5.7, 0.24, -8.7);
    this.#slimeNode('reactorVeil', reactorVeilPos, { infection: 7, heal: 1, onAttune: () => {
      this.player.wailTimer = 0;
      this.narrative.play('reactor', 'slimeVeil');
      this.events.emit('ui:message', 'О-41 // ШУМ ВОПЛЯ ПОГАШЕН');
    }});
    this.objective.set('reactorPortal', 'НАЙТИ ИСТОЧНИК БИОСИГНАЛА', portalDoorPos);
    let pocketEntered = this.quest.has('reactorPocketEntered');
    let stairLoops = this.quest.count('reactorStairLoops');

    this.triggers.add({ id: 'selfStair', minX: -2.5, maxX: 2.5, minZ: 0.2, maxZ: 1.3, once: false, onEnter: () => {
      if (pocketEntered || stairLoops >= 2) return;
      stairLoops = this.quest.increment('reactorStairLoops');
      this.player.position.z = 6.0;
      this.events.emit('world:teleport', { kind: 'self-stair', count: stairLoops });
    }});

    this.interactions.add({ id: 'reactorPortal', position: portalDoorPos, radius: 1.25, prompt: 'E — ВОЙТИ В ТЕХНИЧЕСКУЮ КАМЕРУ', onUse: () => {
      pocketEntered = true;
      this.quest.add('reactorPocketEntered');
      this.player.position.set(28, 1.55, 3.4);
      this.objective.set('irritantCore', 'НЕЙТРАЛИЗОВАТЬ ЯДРО-РАЗДРАЖИТЕЛЬ', core.group.position);
      return true;
    }});

    this.interactions.add({ id: 'pocketExit', position: exitPos, radius: 1.2, prompt: 'E — ВЕРНУТЬСЯ В РЕАКТОРНЫЙ КОРИДОР', onUse: () => {
      if (!this.quest.has('reactorCore')) { this.events.emit('ui:message', 'БИОЗАМОК АКТИВЕН: ЯДРО НЕЙТРАЛИЗОВАТЬ'); return false; }
      this.quest.add('reactorPocketExited');
      this.player.position.set(0, 1.55, -7.0);
      this.objective.set('reactorExit', 'ОТКРЫТЬ СПУСК В НИЖНИЙ ТОННЕЛЬ', new THREE.Vector3(0, 0, -11.8));
      return true;
    }});

    this.#installExitGate({
      id: 'reactorExit', from: 'reactor', to: 'womb', door: reactorExitDoor,
      interactPosition: new THREE.Vector3(0, 0, -11.75),
      crossZone: { minX: -1.25, maxX: 1.25, minZ: -14.65, maxZ: -13.45 },
      prompt: 'E — ОТКРЫТЬ СПУСК В НИЖНИЙ ТОННЕЛЬ',
      lockedMessage: 'СНАЧАЛА НЕЙТРАЛИЗУЙТЕ ЯДРО-РАЗДРАЖИТЕЛЬ',
      objectiveText: 'СПУСТИТЬСЯ В НИЖНИЙ ТОННЕЛЬ'
    });

    let wailerNarrated = false;
    this.#on('enemy:wail', () => {
      if (!wailerNarrated) { wailerNarrated = true; this.narrative.play('reactor', 'wailer'); }
    });
    this.#on('enemy:killed', ({ enemy }) => {
      if (enemy !== core) return;
      this.crafting.unlock('shield');
      this.quest.add('reactorCore');
      this.narrative.play('reactor', 'coreDead');
      this.objective.set('pocketExit', 'ВЫЙТИ ИЗ КАМЕРЫ', exitPos);
    });

    return {
      spawn: { x: 0, z: 13.0 }, yaw: Math.PI,
      audio: { emitters: [
        { type: 'steam', x: 5.9, z: -3.0 }, { type: 'turbine', x: -6, z: -9 },
        { type: 'pressure', x: 6, z: 3 }, { type: 'geiger', x: 28, z: -1.3 },
        { type: 'metal', x: 0, z: -11.0 }
      ] }
    };
  }

  _womb() {
    this.#setScene(0x120908, 2.0, 11.0);
    this.#floor(18, 30, 'organicFloor');
    this.#ceiling(18, 30, 'organicWall', 0, 0, 3.0);
    // Entry remains recognisably industrial for a few metres, then the tunnel is overtaken by living tissue.
    this.#floor(6.2, 7.0, 'floor', 0, 11.2);
    this.#ceiling(6.2, 7.0, 'ceiling', 0, 11.2, 3.0);
    this.#wall(-3.0, 11.2, 0.22, 7.0, { height: 3.0, material: 'reactorWall', collide: false });
    this.#wall(3.0, 11.2, 0.22, 7.0, { height: 3.0, material: 'reactorWall', collide: false });
    const organicWalls = [];
    const addOrganic = (x, z, w, d) => {
      const wall = this.#wall(x, z, w, d, { height: 3.0, material: 'organicWall' });
      organicWalls.push(wall.mesh); return wall;
    };
    addOrganic(-9.1, 0, 0.45, 30.2); addOrganic(9.1, 0, 0.45, 30.2);
    addOrganic(0, 15.1, 18.2, 0.45); addOrganic(0, -15.1, 18.2, 0.45);
    addOrganic(-3.2, 7, 0.5, 14); addOrganic(3.2, 7, 0.5, 14);
    addOrganic(-5.8, -4.0, 6.4, 0.5); addOrganic(5.8, -4.0, 6.4, 0.5);
    addOrganic(-5.25, -13.1, 7.5, 0.42); addOrganic(5.25, -13.1, 7.5, 0.42);
    const wombExitDoor = this.#door(0, -13.1, 0, 'organicWall');
    this.#fungusPatch(0, 9, 28, true); this.#fungusPatch(-5, -6, 30, true); this.#fungusPatch(5, -9, 26, true);
    this.#pipeRun(-2.45, 11.2, 6.0, { axis: 'z', count: 2, y: 2.55, color: P.slate });
    this.#ceilingLamp(0, 12.4, { width: 1.0, flicker: true });
    this.#ceilingLamp(0, 9.6, { width: 0.9, color: P.rust, flicker: true });
    this.#organicPods(-7.6, 2.5, 8, 1.1); this.#organicPods(7.5, -2.0, 9, 1.25);
    this.#organicPods(-7.2, -10.2, 7, 1.0);
    this.#puddle(0.6, 6.5, 1.5, 0.85, P.rust);
    this.#slimePool('wombHazardA', 0.7, 6.3, 1.15, { kind: 'hazard', infectionPerSecond: 6.2, slowSeconds: 0.22, color: P.rust, visualStrength: 1.1 });
    this.#slimePool('wombCalmA', -5.6, -1.8, 1.15, { kind: 'symbiotic', calmPerSecond: 1.1, slowSeconds: 0, color: P.green, visualStrength: 1.0 });
    this.#slimePool('wombHazardB', 4.8, -8.4, 1.25, { kind: 'hazard', infectionPerSecond: 8.0, slowSeconds: 0.28, color: P.rust, visualStrength: 1.2 });
    for (const mesh of organicWalls) {
      const baseY = mesh.scale.y;
      this.animations.push((dt, time) => { mesh.scale.y = baseY * (1 + Math.sin(time * 1.3 + mesh.position.z * 0.2) * 0.012); });
    }

    this.enemies.spawn('wailer', { x: 0, z: 4.0 });
    this.enemies.spawn('hive', { x: -4.4, z: -7.0 });
    this.enemies.spawn('hive', { x: 4.2, z: -10.0 });
    this.spores.spawn(new THREE.Vector3(2.0, 0, 8.0), 2);
    this.spores.spawn(new THREE.Vector3(-4.5, 0, -8.0), 3);

    // Hallucinated institute room, spatially impossible and visually industrial.
    this.#floor(9, 9, 'floor', 30, 0); this.#ceiling(9, 9, 'ceiling', 30, 0);
    this.#wall(25.5, 0, 0.35, 9, { material: 'industrialWall' }); this.#wall(34.5, 0, 0.35, 9, { material: 'industrialWall' });
    this.#wall(30, 4.5, 9, 0.35, { material: 'industrialWall' }); this.#wall(30, -4.5, 9, 0.35, { material: 'industrialWall' });
    this.#sign('ЛИЧНЫЕ ДЕЛА', 'К.О.Н.Т.У.Р.', 30, 2.2, -4.3);
    const dossierPos = new THREE.Vector3(30, 0.5, -1.8);
    const dossierMesh = this.#pickupMesh('dossier', dossierPos);
    const drillPos = new THREE.Vector3(32, 0.5, -1.2);
    const drillMesh = this.#pickupMesh('weapon', drillPos);

    this.narrative.play('womb', 'intro');
    const call1 = new THREE.Vector3(1.9, 0.24, 8.0);
    const call2 = new THREE.Vector3(-5.6, 0.24, -1.8);
    const choir = new THREE.Vector3(5.1, 0.24, -7.5);
    this.#slimeNode('wombCall1', call1, { infection: 7, onAttune: () => {
      this.narrative.play('womb', 'call1');
      this.objective.set('wombCall2', 'ГОЛОС О-41: ИДТИ ПО ВЛАЖНОМУ СЛЕДУ', call2);
    }});
    this.#slimeNode('wombCall2', call2, {
      infection: 7, heal: 1,
      guard: () => this.quest.has('slime:wombCall1'),
      lockedMessage: 'О-41 // ЭТОТ ФРАГМЕНТ ЕЩЁ НЕ ВАШ',
      onAttune: () => {
        this.narrative.play('womb', 'call2');
        this.objective.set('wombChoir', 'ГОЛОС О-41: НАЙТИ ИСТОЧНИК ХОРА', choir);
      }
    });
    this.#slimeNode('wombChoir', choir, {
      infection: 9,
      guard: () => this.quest.has('slime:wombCall2'),
      lockedMessage: 'О-41 // СИГНАЛ НЕ СОБРАН',
      onAttune: () => {
        this.narrative.play('womb', 'choir');
        this.events.emit('ui:message', 'О-41 // ФРАГМЕНТ ПРЕДУПРЕЖДЕНИЯ ЗАПОМНЕН');
        this.objective.set('memoryRoom', 'ПРОВЕРИТЬ КОРИДОР, КОТОРОГО НЕТ НА ПЛАНЕ', new THREE.Vector3(0, 0, 0.5));
      }
    });
    this.objective.set('memoryRoom', 'СЛЕДОВАТЬ ЗА «ЗНАКОМЫМ» КОРИДОРОМ', new THREE.Vector3(0, 0, 0.5));
    let inMemory = false;

    this.triggers.add({ id: 'memoryPortal', minX: -2.5, maxX: 2.5, minZ: -0.2, maxZ: 1.0, once: true, onEnter: () => {
      inMemory = true;
      this.player.position.set(30, 1.55, 2.8);
      this.objective.set('dossier', 'ПРОВЕРИТЬ ЛИЧНОЕ ДЕЛО «СКАЛЬПЕЛЬ»', dossierPos);
      this.events.emit('world:hallucination', { active: true });
    }});

    this.interactions.add({ id: 'dossier', position: dossierPos, radius: 1.0, mode: 'pickup', onUse: () => {
      if (this.quest.has('dossier')) return true;
      this.quest.add('dossier');
      dossierMesh.removeFromParent();
      this.narrative.play('womb', 'dossier');
      this.infection.add(18, 'dossierResonance');
      this.objective.set('memoryExit', 'ВЫЙТИ ИЗ КОМНАТЫ, КОТОРОЙ НЕТ НА ПЛАНЕ', new THREE.Vector3(30, 0, -4));
      return true;
    }});

    this.interactions.add({ id: 'drillPickup', position: drillPos, radius: 1.0, mode: 'pickup', onUse: () => {
      if (this.belt.unlocked.has('drill')) return true;
      this.belt.unlock('drill', { sporeCharge: 5 });
      this.crafting.unlock('drillCharge');
      drillMesh.removeFromParent();
      return true;
    }});

    this.interactions.add({ id: 'memoryExit', position: new THREE.Vector3(30, 0, -3.8), radius: 1.2, prompt: 'E — ОТКРЫТЬ ДВЕРЬ', onUse: () => {
      if (!this.quest.has('dossier')) return false;
      this.quest.add('memoryRoomExited');
      this.player.position.set(0, 1.55, -5.0);
      inMemory = false;
      this.events.emit('world:hallucination', { active: false });
      this.objective.set('wombExit', 'ОТКРЫТЬ ПРОХОД В 3-Й КОНТУР', new THREE.Vector3(0, 0, -11.8));
      return true;
    }});

    this.#installExitGate({
      id: 'wombExit', from: 'womb', to: 'silence', door: wombExitDoor,
      interactPosition: new THREE.Vector3(0, 0, -11.75),
      crossZone: { minX: -1.25, maxX: 1.25, minZ: -14.65, maxZ: -13.45 },
      prompt: 'E — ОТКРЫТЬ ПРОХОД В 3-Й КОНТУР',
      lockedMessage: 'РЕЗОНАНС НЕ СТАБИЛИЗИРОВАН: НАЙДИТЕ ЛИЧНОЕ ДЕЛО',
      objectiveText: 'ВОЙТИ В 3-Й КОНТУР'
    });

    return {
      spawn: { x: 0, z: 13.0 }, yaw: Math.PI,
      audio: { emitters: [
        { type: 'wet', x: -7.6, z: 2.5 }, { type: 'pulse', x: 7.5, z: -2.0 },
        { type: 'sporeHiss', x: -5, z: -6 }, { type: 'wet', x: 5, z: -9 },
        { type: 'whisper', x: 30, z: 0 }
      ] },
      update: (dt) => {
        if (!inMemory) this.infection.add(dt * 0.28, 'aggressiveSpores');
      }
    };
  }

  _silence() {
    this.#setScene(0xd8dfd5, 10, 32);
    this.#floor(30, 30, 'whiteWall');
    const wallMat = new THREE.MeshBasicMaterial({ color: P.pale, fog: true });
    const arenaWalls = [];
    for (let i = 0; i < 12; i++) {
      const a = i / 12 * Math.PI * 2;
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(2.0, 2.4, 0.22), wallMat.clone());
      mesh.position.set(Math.sin(a) * 12, 1.2, Math.cos(a) * 12 - 2);
      mesh.rotation.y = a;
      this.root.add(mesh); arenaWalls.push(mesh);
    }
    this.#floatingFragments(0, -2, 18, 8.2);
    this.#slimePool('silenceApproach', 0, 3.0, 1.4, { kind: 'symbiotic', calmPerSecond: 0.42, slowSeconds: 0, color: P.pale, visualStrength: 0.65 });
    this.#slimePool('silenceThreshold', 0, -8.0, 1.6, { kind: 'hazard', infectionPerSecond: 3.0, slowSeconds: 0.12, color: P.green, visualStrength: 0.9 });

    const resonatorPos = new THREE.Vector3(0, 0.55, 5.2);
    const resonatorMesh = this.#pickupMesh('weapon', resonatorPos);
    const boss = this.enemies.spawn('collective', { x: 0, z: -5 });

    const choiceDefs = {
      burn: { id: 'burnChoice', pos: new THREE.Vector3(-5.0, 0, -10.4), color: P.rust, prompt: 'E — СЖЕЧЬ КОНТУР / ПОДТВЕРДИТЬ ЗАРЯД' },
      merge: { id: 'mergeChoice', pos: new THREE.Vector3(5.0, 0, -10.4), color: P.lime, prompt: 'E — СЛИТЬСЯ / СТАТЬ УЗЛОМ О-41' },
      broadcast: { id: 'broadcastChoice', pos: new THREE.Vector3(0, 0, -12.0), color: P.steel, prompt: 'E — ПЕРЕДАТЬ СИГНАЛ / 167.05 МГЦ' },
      sever: { id: 'severChoice', pos: new THREE.Vector3(0, 0, -9.4), color: P.pale, prompt: 'E — РАЗОРВАТЬ РЕЗОНАНС / УЙТИ' }
    };

    const choiceVisuals = {};
    const choiceInteractions = {};
    for (const [ending, def] of Object.entries(choiceDefs)) {
      const geometry = ending === 'merge' ? new THREE.IcosahedronGeometry(0.65, 1) : new THREE.BoxGeometry(1.0, 0.9, 1.0);
      const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: def.color, fog: true, transparent: true, opacity: 0.82 }));
      mesh.position.set(def.pos.x, ending === 'merge' ? 0.78 : 0.45, def.pos.z); mesh.visible = false; this.root.add(mesh);
      choiceVisuals[ending] = mesh;
      choiceInteractions[ending] = this.interactions.add({ id: def.id, position: def.pos, radius: 1.35, prompt: def.prompt, enabled: false, onUse: () => {
        if (ending === 'burn') this.slime?.burn?.('collective');
        this.quest?.add?.(`ending:${ending}`);
        this.events.emit('game:ending', { ending }); return true;
      }});
    }

    this.narrative.play('silence', 'intro');
    this.objective.set('resonator', 'ВЗЯТЬ РЕЗОНАТОР', resonatorPos);
    let bossDead = false;

    this.interactions.add({ id: 'resonatorPickup', position: resonatorPos, radius: 1.05, mode: 'pickup', onUse: () => {
      if (this.belt.unlocked.has('resonator')) return true;
      this.belt.unlock('resonator', { resonance: 60 });
      resonatorMesh.removeFromParent();
      this.objective.set('collective', 'ИДТИ НА ГОЛОС // ИСПОЛЬЗОВАТЬ РЕЗОНАТОР', boss.group.position);
      this.narrative.play('silence', 'approach');
      return true;
    }});

    this.#on('boss:phase', ({ phase }) => {
      if (phase === 2) {
        this.narrative.play('silence', 'phase2');
        this.scene.fog = new THREE.Fog(0xb4c3c1, 3, 15);
        for (let i = 0; i < arenaWalls.length; i++) arenaWalls[i].rotation.z = (i % 2 ? 1 : -1) * 0.18;
      } else if (phase === 3) {
        this.narrative.play('silence', 'phase3');
        this.scene.fog = new THREE.Fog(0x8098a0, 1.5, 10);
        for (let i = 0; i < arenaWalls.length; i++) arenaWalls[i].position.y = i % 2 ? 2.4 : 0.6;
      }
    });

    this.#on('enemy:killed', ({ enemy }) => {
      if (enemy !== boss) return;
      bossDead = true;
      const available = this.slime?.endingAvailability?.() ?? { burn: true, merge: true, broadcast: false, sever: false };
      const labels = [];
      for (const [ending, enabled] of Object.entries(available)) {
        if (!enabled || !choiceInteractions[ending]) continue;
        choiceVisuals[ending].visible = true;
        choiceInteractions[ending].enabled = true;
        labels.push({ burn: 'СЖЕЧЬ', merge: 'СЛИТЬСЯ', broadcast: 'ПЕРЕДАТЬ', sever: 'РАЗОРВАТЬ' }[ending]);
      }
      this.narrative.play('silence', 'choice');
      if (available.broadcast) this.narrative.play('silence', 'broadcastPath');
      else if (available.sever) this.narrative.play('silence', 'severPath');
      this.objective.set('finalChoice', `ВЫБОР: ${labels.join(' / ')}`, new THREE.Vector3(0, 0, -10.8));
    });

    return {
      spawn: { x: 0, z: 9.0 }, yaw: Math.PI,
      audio: { emitters: [
        { type: 'resonance', x: 0, z: -5 }, { type: 'distantPulse', x: -8, z: -2 },
        { type: 'whisper', x: 8, z: -3 }, { type: 'resonance', x: 0, z: 6 },
        { type: 'whisper', x: 0, z: -11 }
      ] },
      update: (dt, time) => {
        if (!bossDead) {
          for (let i = 0; i < arenaWalls.length; i++) {
            const wall = arenaWalls[i];
            wall.position.x += Math.sin(time * 0.45 + i) * 0.0015 * this.enemies.bossPhase;
            wall.position.z += Math.cos(time * 0.42 + i) * 0.0015 * this.enemies.bossPhase;
          }
        } else {
          for (const [ending, mesh] of Object.entries(choiceVisuals)) {
            if (!mesh.visible) continue;
            mesh.rotation.y += dt * (ending === 'merge' ? 0.55 : 0.18);
            mesh.position.y += Math.sin(time * 1.6 + mesh.position.x) * 0.0008;
          }
        }
      }
    };
  }

}
