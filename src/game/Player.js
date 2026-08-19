import * as THREE from 'three';

export class Player {
  constructor({ camera, input, collision, events, infection }) {
    this.camera = camera;
    this.input = input;
    this.collision = collision;
    this.events = events;
    this.infection = infection;

    this.position = new THREE.Vector3(0, 1.55, 0);
    this.yaw = Math.PI;
    this.pitch = 0;
    this.maxHealth = 8;
    this.health = this.maxHealth;
    this.baseSpeed = 3.55;
    this.radius = 0.31;
    this.slowTimer = 0;
    this.shieldTimer = 0;
    this.dead = false;
    this.recoil = 0;
    this.wailTimer = 0;
  }

  resetForLevel(position, yaw = Math.PI) {
    this.position.set(position.x, 1.55, position.z);
    this.yaw = yaw;
    this.pitch = 0;
    this.camera.position.copy(this.position);
  }

  update(dt, paused = false) {
    this.slowTimer = Math.max(0, this.slowTimer - dt);
    this.shieldTimer = Math.max(0, this.shieldTimer - dt);
    this.wailTimer = Math.max(0, this.wailTimer - dt);
    this.recoil = Math.max(0, this.recoil - dt * 5.5);
    if (paused || this.dead) {
      this.camera.position.copy(this.position);
      return;
    }

    const look = this.input.consumeLook();
    this.yaw -= look.x * 0.00205;
    this.pitch -= look.y * 0.00205;
    this.pitch = THREE.MathUtils.clamp(this.pitch, -1.3, 1.3);

    const roll = this.wailTimer > 0 ? Math.sin(performance.now() * 0.015) * 0.025 * Math.min(1, this.wailTimer) : 0;
    this.camera.rotation.order = 'YXZ';
    this.camera.rotation.y = this.yaw;
    this.camera.rotation.x = this.pitch - this.recoil * 0.04;
    this.camera.rotation.z = roll;

    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const axes = this.input.movement();
    const move = new THREE.Vector3()
      .addScaledVector(forward, axes.y)
      .addScaledVector(right, axes.x);

    if (move.lengthSq() > 0) {
      const slowFactor = this.slowTimer > 0 ? 0.45 : 1;
      const speed = this.baseSpeed * slowFactor;
      this.collision.move(this.position, move.x * speed * dt, move.z * speed * dt, this.radius);
    }

    this.camera.position.copy(this.position);
  }

  damage(amount, source = 'unknown') {
    if (this.dead) return;
    const reduced = this.shieldTimer > 0 ? Math.max(0.25, amount * 0.35) : amount;
    this.health = Math.max(0, this.health - reduced);
    this.infection.add(source === 'wailer' ? 8 : 3.5 * amount, source);
    this.events.emit('player:damaged', { amount: reduced, source, health: this.health });
    if (this.health <= 0) {
      this.dead = true;
      this.events.emit('player:died', { source });
    }
  }

  heal(amount) {
    this.health = Math.min(this.maxHealth, this.health + amount);
    this.events.emit('player:healed', { amount, health: this.health });
  }

  slow(seconds) {
    this.slowTimer = Math.max(this.slowTimer, seconds);
    this.events.emit('player:slowed', { seconds });
  }

  activateShield(seconds = 5) {
    this.shieldTimer = Math.max(this.shieldTimer, seconds);
    this.events.emit('player:shield', { seconds });
  }

  applyWail(seconds = 2.4) {
    this.wailTimer = Math.max(this.wailTimer, seconds);
  }

  addRecoil(amount = 1) {
    this.recoil = Math.min(2, this.recoil + amount);
  }
}
