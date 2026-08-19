import * as THREE from 'three';
import { EnemyFactory } from '../render/EnemyFactory.js';
import { RETRO_PALETTE as P } from '../render/TextureFactory.js';

const STATS = {
  sporecarrier: { hp: 3, speed: 1.05, radius: 0.42, detect: 11, melee: 1.02, damage: 1 },
  whipster: { hp: 4, speed: 0.85, radius: 0.38, detect: 13, preferred: 5.5, damage: 1 },
  wailer: { hp: 3, speed: 0.55, radius: 0.42, detect: 12, preferred: 6.5, damage: 1 },
  hive: { hp: 10, speed: 0.58, radius: 0.72, detect: 13, melee: 1.35, damage: 2 },
  irritantCore: { hp: 14, speed: 0, radius: 1.0, detect: 14, damage: 1 },
  collective: { hp: 30, speed: 0, radius: 1.35, detect: 30, damage: 1 }
};

function projectileMaterial(color) {
  return new THREE.MeshBasicMaterial({ color, fog: true });
}

export class EnemyDirector {
  constructor({ scene, events, collision, onPlayerDamage, onPlayerSlow, onSporeDrop }) {
    this.scene = scene;
    this.events = events;
    this.collision = collision;
    this.onPlayerDamage = onPlayerDamage;
    this.onPlayerSlow = onPlayerSlow;
    this.onSporeDrop = onSporeDrop;
    this.factory = new EnemyFactory();
    this.enemies = [];
    this.projectiles = [];
    this.time = 0;
    this.nextId = 1;
    this.hiveDistortion = 0;
    this.wailDistortion = 0;
    this.bossPhase = 1;
  }

  clear() {
    for (const enemy of this.enemies) this.scene.remove(enemy.group);
    for (const p of this.projectiles) this.scene.remove(p.mesh);
    this.enemies.length = 0;
    this.projectiles.length = 0;
    this.hiveDistortion = 0;
    this.wailDistortion = 0;
    this.bossPhase = 1;
  }

  spawn(type, position, options = {}) {
    const visual = this.factory.create(type);
    const stats = STATS[type];
    if (!stats) throw new Error(`Unknown enemy type: ${type}`);
    visual.group.position.set(position.x, 0, position.z);
    this.scene.add(visual.group);
    const enemy = {
      id: this.nextId++, type, group: visual.group, parts: visual.parts,
      hp: options.hp ?? stats.hp, maxHp: options.hp ?? stats.hp,
      speed: options.speed ?? stats.speed, radius: stats.radius,
      alive: true, attackCooldown: 0.4 + Math.random(), abilityCooldown: 1 + Math.random(),
      voiceCooldown: 2.5 + Math.random() * 4.0,
      slowTimer: 0, phase: Math.random() * Math.PI * 2,
      narrativeTag: options.narrativeTag ?? null
    };
    this.enemies.push(enemy);
    return enemy;
  }

  alive(type = null) {
    return this.enemies.filter((enemy) => enemy.alive && (!type || enemy.type === type));
  }

  getBoss() {
    return this.enemies.find((enemy) => enemy.alive && enemy.type === 'collective') ?? null;
  }

  update(dt, playerPosition) {
    this.time += dt;
    this.playerPosition = playerPosition;
    this.hiveDistortion = 0;
    this.wailDistortion = Math.max(0, this.wailDistortion - dt * 0.45);

    for (const enemy of this.enemies) {
      if (!enemy.alive) continue;
      enemy.attackCooldown -= dt;
      enemy.abilityCooldown -= dt;
      enemy.voiceCooldown -= dt;
      enemy.slowTimer = Math.max(0, enemy.slowTimer - dt);
      enemy.phase += dt * 6;
      this.#animate(enemy);

      const dx = playerPosition.x - enemy.group.position.x;
      const dz = playerPosition.z - enemy.group.position.z;
      const distance = Math.hypot(dx, dz);
      if (distance < 0.001) continue;
      const nx = dx / distance;
      const nz = dz / distance;
      enemy.group.rotation.y = Math.atan2(nx, nz);

      if (distance < 10 && enemy.voiceCooldown <= 0 && enemy.type !== 'collective' && enemy.type !== 'irritantCore') {
        this.events.emit('enemy:voice', {
          type: enemy.type,
          enemyId: enemy.id,
          distance,
          position: enemy.group.position.clone()
        });
        enemy.voiceCooldown = 5.5 + Math.random() * 6.5;
      }

      if (enemy.type === 'sporecarrier') {
        this.#chase(enemy, nx, nz, distance, dt, STATS.sporecarrier.melee);
        if (distance <= STATS.sporecarrier.melee && enemy.attackCooldown <= 0) {
          this.onPlayerDamage(STATS.sporecarrier.damage, 'sporecarrier');
          enemy.attackCooldown = 0.95;
        }
      } else if (enemy.type === 'whipster') {
        this.#keepDistance(enemy, nx, nz, distance, dt, 4.2, 7.0);
        if (distance < 9 && enemy.abilityCooldown <= 0) {
          this.#shootProjectile(enemy, playerPosition, { speed: 6.5, color: 0x55b64a, damage: 0, slow: 2.2, radius: 0.15 });
          enemy.abilityCooldown = 2.1;
        }
      } else if (enemy.type === 'wailer') {
        this.#keepDistance(enemy, nx, nz, distance, dt, 5.2, 8.0);
        if (distance < 9 && enemy.abilityCooldown <= 0) {
          this.wailDistortion = 1;
          this.events.emit('enemy:wail', { enemyId: enemy.id, distance, position: enemy.group.position.clone() });
          if (distance < 5.2) this.onPlayerDamage(1, 'wailer');
          enemy.abilityCooldown = 4.2;
        }
      } else if (enemy.type === 'hive') {
        this.#chase(enemy, nx, nz, distance, dt, STATS.hive.melee);
        this.hiveDistortion = Math.max(this.hiveDistortion, Math.max(0, 1 - distance / 6));
        if (distance <= STATS.hive.melee && enemy.attackCooldown <= 0) {
          this.onPlayerDamage(STATS.hive.damage, 'hive');
          enemy.attackCooldown = 1.45;
        }
      } else if (enemy.type === 'irritantCore') {
        if (distance < 12 && enemy.abilityCooldown <= 0) {
          this.#radialBurst(enemy, playerPosition, 5);
          enemy.abilityCooldown = 3.1;
        }
      } else if (enemy.type === 'collective') {
        this.#updateBoss(enemy, playerPosition, distance);
      }
    }

    this.#updateProjectiles(dt, playerPosition);
  }

  raycast(origin, direction, maxRange, filter = () => true) {
    let best = null;
    let bestT = maxRange + 1;
    for (const enemy of this.enemies) {
      if (!enemy.alive || !filter(enemy)) continue;
      const centerY = enemy.type === 'collective' ? 1.55 : enemy.type === 'irritantCore' ? 1.2 : enemy.type === 'hive' ? 1.15 : 1.30;
      const center = new THREE.Vector3(enemy.group.position.x, centerY, enemy.group.position.z);
      const to = center.clone().sub(origin);
      const t = to.dot(direction);
      if (t < 0 || t > maxRange || t >= bestT) continue;
      const closest = origin.clone().addScaledVector(direction, t);
      const radius = enemy.type === 'collective' ? enemy.radius * 1.2 : enemy.radius + 0.18;
      if (closest.distanceTo(center) <= radius) {
        best = enemy;
        bestT = t;
      }
    }
    return best ? { enemy: best, distance: bestT } : null;
  }

  damage(enemy, amount, source = 'pm') {
    if (!enemy?.alive) return { applied: false, killed: false };
    if (enemy.type === 'collective' && source !== 'resonator') {
      if (source === 'fungus') enemy.slowTimer = Math.max(enemy.slowTimer, 2.5);
      this.events.emit('boss:immune', { source });
      return { applied: false, killed: false };
    }
    enemy.hp -= amount;
    this.events.emit('enemy:damaged', { enemy, amount, source });
    if (enemy.hp <= 0) {
      this.#kill(enemy, source);
      return { applied: true, killed: true };
    }
    if (enemy.type === 'collective') this.#checkBossPhase(enemy);
    return { applied: true, killed: false };
  }

  slowInRadius(position, radius, seconds) {
    for (const enemy of this.enemies) {
      if (!enemy.alive) continue;
      if (enemy.group.position.distanceTo(position) <= radius) enemy.slowTimer = Math.max(enemy.slowTimer, seconds);
    }
  }

  #chase(enemy, nx, nz, distance, dt, stopDistance) {
    if (distance > STATS[enemy.type].detect || distance <= stopDistance) return;
    const slow = enemy.slowTimer > 0 ? 0.28 : 1;
    const step = enemy.speed * slow * dt;
    const x = enemy.group.position.x + nx * step;
    const z = enemy.group.position.z + nz * step;
    if (!this.collision.blocked(x, z, enemy.radius * 0.55)) {
      enemy.group.position.x = x;
      enemy.group.position.z = z;
    }
  }

  #keepDistance(enemy, nx, nz, distance, dt, minDistance, maxDistance) {
    if (distance > STATS[enemy.type].detect) return;
    const slow = enemy.slowTimer > 0 ? 0.28 : 1;
    let sign = 0;
    if (distance > maxDistance) sign = 1;
    else if (distance < minDistance) sign = -1;
    if (!sign) return;
    const step = enemy.speed * slow * dt * sign;
    const x = enemy.group.position.x + nx * step;
    const z = enemy.group.position.z + nz * step;
    if (!this.collision.blocked(x, z, enemy.radius * 0.5)) {
      enemy.group.position.x = x;
      enemy.group.position.z = z;
    }
  }

  #shootProjectile(enemy, target, config) {
    const origin = new THREE.Vector3(enemy.group.position.x, 1.2, enemy.group.position.z);
    const dir = target.clone().sub(origin).normalize();
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(config.radius ?? 0.12, 6, 4), projectileMaterial(config.color ?? 0x55b64a));
    mesh.position.copy(origin);
    this.scene.add(mesh);
    this.projectiles.push({ mesh, velocity: dir.multiplyScalar(config.speed ?? 6), ttl: 4, damage: config.damage ?? 1, slow: config.slow ?? 0, radius: config.radius ?? 0.12 });
    this.events.emit('enemy:attack', { type: 'projectile', position: origin.clone() });
  }

  #radialBurst(enemy, target, count) {
    this.events.emit('enemy:attack', { type: enemy.type === 'collective' ? 'collectiveBurst' : 'radialBurst', position: enemy.group.position.clone() });
    const base = Math.atan2(target.x - enemy.group.position.x, target.z - enemy.group.position.z);
    for (let i = 0; i < count; i++) {
      const angle = base + (i - (count - 1) / 2) * 0.20;
      const origin = new THREE.Vector3(enemy.group.position.x, 1.25, enemy.group.position.z);
      const dir = new THREE.Vector3(Math.sin(angle), 0, Math.cos(angle));
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.13, 6, 4), projectileMaterial(0xd07035));
      mesh.position.copy(origin); this.scene.add(mesh);
      this.projectiles.push({ mesh, velocity: dir.multiplyScalar(5.5), ttl: 4, damage: 1, slow: 0.4, radius: 0.13 });
    }
  }

  #updateProjectiles(dt, playerPosition) {
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      p.ttl -= dt;
      p.mesh.position.addScaledVector(p.velocity, dt);
      const dist = p.mesh.position.distanceTo(playerPosition);
      let remove = p.ttl <= 0;
      if (!remove && dist < 0.52) {
        if (p.damage > 0) this.onPlayerDamage(p.damage, 'projectile');
        if (p.slow > 0) this.onPlayerSlow(p.slow);
        remove = true;
      }
      if (!remove && this.collision.blocked(p.mesh.position.x, p.mesh.position.z, 0.05)) remove = true;
      if (remove) {
        this.scene.remove(p.mesh);
        this.projectiles.splice(i, 1);
      }
    }
  }

  #animate(enemy) {
    const swing = Math.sin(enemy.phase) * 0.42;
    if (enemy.parts.armL) enemy.parts.armL.rotation.x = swing;
    if (enemy.parts.armR) enemy.parts.armR.rotation.x = -swing;
    if (enemy.parts.legL) enemy.parts.legL.rotation.x = -swing * 0.7;
    if (enemy.parts.legR) enemy.parts.legR.rotation.x = swing * 0.7;
    if (enemy.type === 'irritantCore' && enemy.parts.torso) {
      const scale = 1 + Math.sin(this.time * 3.2) * 0.08;
      enemy.parts.torso.scale.setScalar(scale);
      enemy.parts.torso.rotation.y += 0.01;
    }
    if (enemy.type === 'collective') {
      enemy.group.rotation.y += 0.004 * this.bossPhase;
      if (enemy.parts.inner) {
        const scale = 0.8 + Math.sin(this.time * 4) * 0.18;
        enemy.parts.inner.scale.setScalar(scale);
      }
    }
  }

  #updateBoss(enemy, playerPosition, distance) {
    this.#checkBossPhase(enemy);
    if (enemy.abilityCooldown > 0) return;
    if (this.bossPhase === 1) {
      this.#radialBurst(enemy, playerPosition, 3);
      if (this.alive('sporecarrier').length < 3) {
        this.spawn('sporecarrier', { x: enemy.group.position.x + 3, z: enemy.group.position.z + 2 });
        this.spawn('sporecarrier', { x: enemy.group.position.x - 3, z: enemy.group.position.z - 2 });
      }
      enemy.abilityCooldown = 3.0;
    } else if (this.bossPhase === 2) {
      this.wailDistortion = 1;
      this.events.emit('enemy:wail', { enemyId: enemy.id, boss: true, distance, position: enemy.group.position.clone() });
      this.#radialBurst(enemy, playerPosition, 7);
      enemy.abilityCooldown = 2.6;
    } else {
      this.hiveDistortion = 1;
      this.#radialBurst(enemy, playerPosition, 9);
      if (this.alive('whipster').length < 2) {
        this.spawn('whipster', { x: enemy.group.position.x + 4, z: enemy.group.position.z });
        this.spawn('whipster', { x: enemy.group.position.x - 4, z: enemy.group.position.z });
      }
      if (this.alive('hive').length < 1) {
        this.spawn('hive', { x: enemy.group.position.x, z: enemy.group.position.z + 5 });
      }
      enemy.abilityCooldown = 2.0;
    }
  }

  #checkBossPhase(enemy) {
    const ratio = enemy.hp / enemy.maxHp;
    const next = ratio <= 0.33 ? 3 : ratio <= 0.66 ? 2 : 1;
    if (next !== this.bossPhase) {
      this.bossPhase = next;
      this.events.emit('boss:phase', { phase: next, enemy });
    }
  }

  #kill(enemy, source) {
    enemy.alive = false;
    const deathPos = enemy.group.position.clone();
    this.scene.remove(enemy.group);
    if (enemy.type === 'sporecarrier') {
      this.onSporeDrop(deathPos, 1 + (Math.random() < 0.5 ? 1 : 0));
      if (this.playerPosition && this.playerPosition.distanceTo(deathPos) < 1.55) {
        this.onPlayerDamage(1, 'sporeBurst');
        this.events.emit('enemy:sporeBurst', { position: deathPos.clone() });
      }
    } else if (enemy.type === 'hive') {
      this.onSporeDrop(deathPos, 2);
      for (let i = 0; i < 2 + (Math.random() < 0.5 ? 1 : 0); i++) {
        this.spawn('sporecarrier', { x: deathPos.x + (Math.random() - 0.5) * 2, z: deathPos.z + (Math.random() - 0.5) * 2 });
      }
    } else if (enemy.type === 'irritantCore') {
      this.onSporeDrop(deathPos, 4);
    } else if (enemy.type !== 'collective') {
      this.onSporeDrop(deathPos, 1);
    }
    this.events.emit('enemy:killed', { enemy, source, position: deathPos });
  }
}
