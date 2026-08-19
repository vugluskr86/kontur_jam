import * as THREE from 'three';
import { WEAPONS } from '../data/weapons.js';
import { RETRO_PALETTE as P } from '../render/TextureFactory.js';

export class WeaponSystem {
  constructor({ scene, camera, input, belt, player, enemies, collision, events, weaponView }) {
    this.scene = scene;
    this.camera = camera;
    this.input = input;
    this.belt = belt;
    this.player = player;
    this.enemies = enemies;
    this.collision = collision;
    this.events = events;
    this.weaponView = weaponView;
    this.cooldown = 0;
    this.tracers = [];
    this.fungal = [];
    this.flames = [];
    this.tracerGeometry = new THREE.BoxGeometry(0.045, 0.045, 0.18);
    this.tracerMaterial = new THREE.MeshBasicMaterial({ color: P.pale, fog: true });
    this.flameGeometry = new THREE.IcosahedronGeometry(0.11, 1);
    this.flameLight = new THREE.PointLight(0xff7a18, 0, 7, 2);
    this.scene.add(this.flameLight);
  }

  clear() {
    for (const tracer of this.tracers) this.scene.remove(tracer.mesh);
    for (const projectile of this.fungal) this.scene.remove(projectile.mesh);
    for (const flame of this.flames) this.scene.remove(flame.mesh);
    this.tracers.length = 0;
    this.fungal.length = 0;
    this.flames.length = 0;
    this.flameLight.intensity = 0;
    this.cooldown = 0;
  }

  update(dt, paused = false) {
    this.cooldown = Math.max(0, this.cooldown - dt);
    this.#updateTracers(dt);
    this.#updateFungal(dt);
    this.#updateFlames(dt);
    this.flameLight.intensity = Math.max(0, this.flameLight.intensity - dt * 7);
    this.weaponView.show(this.belt.activeId);
    const moving = this.input.isMoving();
    this.weaponView.update(dt, moving && !paused);
    if (paused || this.player.dead) return;

    if (this.input.consume('Digit1')) this.belt.select(0);
    if (this.input.consume('Digit2')) this.belt.select(1);

    const weapon = this.belt.active;
    const wantsFire = weapon.automatic ? this.input.fireHeld : this.input.consumeFirePressed();
    if (wantsFire && this.cooldown <= 0) this.fire();
  }

  fire() {
    const weapon = this.belt.active;
    if (!this.belt.consumeAmmo(weapon)) {
      this.events.emit('weapon:empty', { weapon });
      this.cooldown = 0.25;
      return false;
    }
    this.cooldown = weapon.cooldown;
    this.player.addRecoil(weapon.id === 'shotgun' ? 1.5 : weapon.id === 'ak' ? 0.45 : 0.75);
    this.weaponView.flash();
    this.events.emit('weapon:fired', { weapon, ammo: this.belt.ammoFor(weapon) });

    if (weapon.kind === 'hitscan' || weapon.kind === 'resonator') this.#fireHitscan(weapon);
    else if (weapon.kind === 'arc') this.#fireArc(weapon);
    else if (weapon.kind === 'flame') this.#fireFlame(weapon);
    else if (weapon.kind === 'melee') this.#fireMelee(weapon);
    else if (weapon.kind === 'fungalProjectile') this.#fireFungal(weapon);
    return true;
  }

  #directionWithSpread(spread) {
    const dir = new THREE.Vector3();
    this.camera.getWorldDirection(dir);
    dir.x += (Math.random() - 0.5) * spread;
    dir.y += (Math.random() - 0.5) * spread;
    dir.z += (Math.random() - 0.5) * spread;
    return dir.normalize();
  }

  #fireHitscan(weapon) {
    for (let i = 0; i < weapon.pellets; i++) {
      const direction = this.#directionWithSpread(weapon.spread);
      const origin = this.camera.position.clone();
      const hit = this.enemies.raycast(origin, direction, weapon.range);
      const end = origin.clone().addScaledVector(direction, hit?.distance ?? weapon.range);
      if (!this.collision.segmentHitsWall(origin, end) && hit) {
        this.enemies.damage(hit.enemy, weapon.damage, weapon.id);
      } else if (hit) {
        // Wall is in front of the enemy. Keep the hit blocked.
      }
      this.#spawnTracer(origin, direction, Math.min(hit?.distance ?? weapon.range, 7));
    }
  }

  #fireMelee(weapon) {
    const direction = this.#directionWithSpread(0);
    const hit = this.enemies.raycast(this.camera.position, direction, weapon.range);
    if (!hit) return;
    this.enemies.damage(hit.enemy, weapon.damage, weapon.id);
  }

  #fireArc(weapon) {
    const direction = this.#directionWithSpread(weapon.spread);
    const origin = this.camera.position.clone();
    this.flameLight.color.setHex(0x6fffe0);
    this.flameLight.position.copy(origin).addScaledVector(direction, 1.1);
    this.flameLight.intensity = 1.15;
    const hit = this.enemies.raycast(origin, direction, weapon.range);
    const end = origin.clone().addScaledVector(direction, hit?.distance ?? weapon.range);
    if (!hit || this.collision.segmentHitsWall(origin, end)) {
      this.#spawnTracer(origin, direction, Math.min(weapon.range, 8));
      return;
    }
    this.enemies.damage(hit.enemy, weapon.damage, weapon.id);
    this.#spawnTracer(origin, direction, Math.min(hit.distance, 8));
    const chained = this.enemies.alive()
      .filter((enemy) => enemy !== hit.enemy && enemy.group.position.distanceTo(hit.enemy.group.position) < 3.3)
      .sort((a, b) => a.group.position.distanceTo(hit.enemy.group.position) - b.group.position.distanceTo(hit.enemy.group.position))
      .slice(0, 2);
    for (const enemy of chained) {
      this.enemies.damage(enemy, weapon.damage * 0.52, weapon.id);
      const link = enemy.group.position.clone().sub(hit.enemy.group.position).normalize();
      this.#spawnTracer(hit.enemy.group.position.clone().setY(1.1), link, Math.min(3.1, hit.enemy.group.position.distanceTo(enemy.group.position)));
    }
  }

  #fireFlame(weapon) {
    const origin = this.camera.position.clone();
    const forward = this.#directionWithSpread(weapon.spread);
    this.flameLight.color.setHex(0xff7a18);
    this.flameLight.position.copy(origin).addScaledVector(forward, 1.05);
    this.flameLight.intensity = 1.85;
    for (let i = 0; i < 3; i++) {
      const direction = this.#directionWithSpread(weapon.spread * 1.8);
      const material = new THREE.MeshBasicMaterial({ color: i === 0 ? 0xffe26b : 0xff6b24, transparent: true, opacity: 0.92, fog: true, depthWrite: false });
      const mesh = new THREE.Mesh(this.flameGeometry, material);
      mesh.position.copy(origin).addScaledVector(forward, 0.48 + i * 0.12);
      this.scene.add(mesh);
      this.flames.push({ mesh, material, velocity: direction.multiplyScalar(5.2 + Math.random() * 3.0), ttl: 0.34 + Math.random() * 0.18, maxTtl: 0.52, weapon, hit: new Set() });
    }
  }

  #fireFungal(weapon) {
    const direction = this.#directionWithSpread(0);
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 7, 5), new THREE.MeshBasicMaterial({ color: P.lime, fog: true }));
    mesh.position.copy(this.camera.position).addScaledVector(direction, 0.55);
    this.scene.add(mesh);
    this.fungal.push({ mesh, velocity: direction.multiplyScalar(7.2), ttl: 2.3, weapon });
  }

  #spawnTracer(origin, direction, distance) {
    const mesh = new THREE.Mesh(this.tracerGeometry, this.tracerMaterial);
    mesh.position.copy(origin).addScaledVector(direction, 0.45);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), direction);
    this.scene.add(mesh);
    this.tracers.push({ mesh, velocity: direction.clone().multiplyScalar(24), ttl: Math.min(0.18, distance / 24) });
  }

  #updateTracers(dt) {
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const tracer = this.tracers[i];
      tracer.ttl -= dt;
      tracer.mesh.position.addScaledVector(tracer.velocity, dt);
      if (tracer.ttl <= 0) {
        this.scene.remove(tracer.mesh);
        this.tracers.splice(i, 1);
      }
    }
  }

  #updateFungal(dt) {
    for (let i = this.fungal.length - 1; i >= 0; i--) {
      const projectile = this.fungal[i];
      projectile.ttl -= dt;
      projectile.mesh.position.addScaledVector(projectile.velocity, dt);
      let explode = projectile.ttl <= 0 || this.collision.blocked(projectile.mesh.position.x, projectile.mesh.position.z, 0.08);
      if (!explode) {
        const hit = this.enemies.enemies.find((enemy) => enemy.alive && enemy.group.position.distanceTo(projectile.mesh.position) < enemy.radius + 0.25);
        if (hit) {
          this.enemies.damage(hit, projectile.weapon.damage, 'fungus');
          explode = true;
        }
      }
      if (explode) {
        this.enemies.slowInRadius(projectile.mesh.position, 2.5, 4.5);
        this.events.emit('weapon:fungalBurst', { position: projectile.mesh.position.clone() });
        this.scene.remove(projectile.mesh);
        this.fungal.splice(i, 1);
      }
    }
  }

  #updateFlames(dt) {
    for (let i = this.flames.length - 1; i >= 0; i--) {
      const flame = this.flames[i];
      flame.ttl -= dt;
      flame.velocity.y += dt * 0.7;
      flame.mesh.position.addScaledVector(flame.velocity, dt);
      const life = Math.max(0, flame.ttl / flame.maxTtl);
      flame.mesh.scale.setScalar(0.55 + (1 - life) * 1.5);
      flame.material.opacity = life * 0.82;
      let remove = flame.ttl <= 0 || this.collision.blocked(flame.mesh.position.x, flame.mesh.position.z, 0.06);
      if (!remove) {
        for (const enemy of this.enemies.alive()) {
          if (flame.hit.has(enemy.id) || enemy.group.position.distanceTo(flame.mesh.position) > enemy.radius + 0.35) continue;
          flame.hit.add(enemy.id);
          this.enemies.damage(enemy, flame.weapon.damage / 3, 'flamethrower');
          break;
        }
      }
      if (remove) {
        this.scene.remove(flame.mesh);
        flame.material.dispose();
        this.flames.splice(i, 1);
      }
    }
  }
}
