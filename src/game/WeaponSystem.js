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
    this.tracerGeometry = new THREE.BoxGeometry(0.045, 0.045, 0.18);
    this.tracerMaterial = new THREE.MeshBasicMaterial({ color: P.pale, fog: true });
  }

  clear() {
    for (const tracer of this.tracers) this.scene.remove(tracer.mesh);
    for (const projectile of this.fungal) this.scene.remove(projectile.mesh);
    this.tracers.length = 0;
    this.fungal.length = 0;
    this.cooldown = 0;
  }

  update(dt, paused = false) {
    this.cooldown = Math.max(0, this.cooldown - dt);
    this.#updateTracers(dt);
    this.#updateFungal(dt);
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
}
