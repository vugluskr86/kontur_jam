import * as THREE from 'three';
import { EventBus } from '../core/EventBus.js';
import { InputController } from '../core/InputController.js';
import { SeededRandom } from '../core/SeededRandom.js';
import { HUD } from '../ui/HUD.js';
import { RetroRenderer } from '../render/RetroRenderer.js';
import { TextureFactory } from '../render/TextureFactory.js';
import { CollisionWorld } from '../world/CollisionWorld.js';
import { InteractionSystem } from '../world/InteractionSystem.js';
import { TriggerSystem } from '../world/TriggerSystem.js';
import { Inventory } from '../game/Inventory.js';
import { InfectionSystem } from '../game/InfectionSystem.js';
import { WeaponBelt } from '../game/WeaponBelt.js';
import { CraftingSystem } from '../game/CraftingSystem.js';
import { ObjectiveSystem } from '../game/ObjectiveSystem.js';
import { ProgressionSystem } from '../game/ProgressionSystem.js';
import { NarrativeDirector } from '../game/NarrativeDirector.js';
import { Player } from '../game/Player.js';
import { EnemyDirector } from '../game/EnemyDirector.js';
import { SporeManager } from '../game/SporeManager.js';
import { WeaponSystem } from '../game/WeaponSystem.js';
import { WeaponView } from '../render/WeaponView.js';
import { LevelFactory } from '../world/LevelFactory.js';
import { LEVEL_META } from '../data/narrative.js';
import { AudioSystem } from '../audio/AudioSystem.js';
import { loadAudioConfigFromStorage } from '../audio/audioConfig.js';
import { SlimeSystem } from '../game/SlimeSystem.js';

export class Game {
  constructor(root) {
    this.root = root;
    this.events = new EventBus();
    this.hud = new HUD(root);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(68, 16 / 9, 0.05, 60);
    this.scene.add(this.camera);
    this.retro = new RetroRenderer(this.hud.viewport);
    this.input = new InputController(this.retro.renderer.domElement);
    this.random = new SeededRandom(0x0411986);
    this.textures = new TextureFactory(() => this.random.next());
    this.collision = new CollisionWorld();
    this.interactions = new InteractionSystem(this.events);
    this.triggers = new TriggerSystem();
    this.inventory = new Inventory(4);
    this.infection = new InfectionSystem(this.events);
    this.belt = new WeaponBelt(this.events);
    this.crafting = new CraftingSystem(this.inventory, this.belt, this.events);
    this.objective = new ObjectiveSystem(this.events);
    this.narrative = new NarrativeDirector(this.events, this.hud);
    this.audio = new AudioSystem({ random: () => this.random.next(), config: loadAudioConfigFromStorage() });
    this.quest = new ProgressionSystem(this.events);
    this.player = new Player({ camera: this.camera, input: this.input, collision: this.collision, events: this.events, infection: this.infection });
    this.slime = new SlimeSystem({ events: this.events, infection: this.infection, player: this.player, quest: this.quest });
    this.weaponView = new WeaponView(this.camera);
    this.sporeManager = new SporeManager({ scene: this.scene, inventory: this.inventory, infection: this.infection, events: this.events });
    this.enemies = new EnemyDirector({
      scene: this.scene,
      events: this.events,
      collision: this.collision,
      onPlayerDamage: (amount, source) => this.player.damage(amount, source),
      onPlayerSlow: (seconds) => this.player.slow(seconds),
      onSporeDrop: (position, count) => this.sporeManager.spawn(position, count)
    });
    this.weapons = new WeaponSystem({
      scene: this.scene, camera: this.camera, input: this.input, belt: this.belt,
      player: this.player, enemies: this.enemies, collision: this.collision,
      events: this.events, weaponView: this.weaponView
    });
    this.levelFactory = new LevelFactory({
      scene: this.scene, collision: this.collision, interactions: this.interactions,
      triggers: this.triggers, enemies: this.enemies, spores: this.sporeManager,
      events: this.events, textures: this.textures, objective: this.objective,
      inventory: this.inventory, belt: this.belt, crafting: this.crafting,
      narrative: this.narrative, infection: this.infection, player: this.player,
      hud: this.hud, quest: this.quest, slime: this.slime
    });

    this.clock = new THREE.Clock();
    this.time = 0;
    this.currentLevel = null;
    this.currentLevelContext = null;
    this.paused = false;
    this.started = false;
    this.hallucination = 0;
    this.endingEffect = 0;
    this.flicker = 0;
    this.gameEnded = false;

    this.#bindUI();
    this.#bindEvents();
    this.#resize();
    window.addEventListener('resize', () => this.#resize());
  }

  start() {
    const loop = () => {
      requestAnimationFrame(loop);
      const dt = Math.min(this.clock.getDelta(), 0.05);
      this.#update(dt);
    };
    loop();
  }

  #bindUI() {
    this.hud.bindStart(() => {
      this.audio.unlock();
      if (!this.started) {
        this.started = true;
        this.loadLevel('perimeter');
      }
      this.input.requestPointerLock();
      this.hud.setPointerLocked(true);
    });

    this.hud.bindCraft((id) => {
      this.audio.ui();
      if (this.crafting.craft(id)) this.hud.showMessage('КРАФТ ЗАВЕРШЁН');
      else this.hud.showMessage('НЕДОСТАТОЧНО РЕСУРСОВ / НЕТ СВОБОДНОГО СЛОТА');
    });

    this.hud.bindEquip((slot, weaponId) => {
      this.audio.ui();
      if (this.belt.equip(slot, weaponId)) this.hud.showMessage(`СЛОТ ${slot + 1}: ${weaponId.toUpperCase()}`);
    });

    this.retro.renderer.domElement.addEventListener('click', () => {
      if (!this.paused && this.started && document.pointerLockElement !== this.retro.renderer.domElement) this.input.requestPointerLock();
    });
  }

  #bindEvents() {
    this.events.on('ui:message', (text) => this.hud.showMessage(text));
    this.events.on('weapon:unlocked', ({ weapon }) => { this.hud.showMessage(`ОРУЖИЕ: ${weapon.name}`, 1.6); this.audio.pickup(); });
    this.events.on('weapon:empty', () => { this.hud.showMessage('НЕТ БОЕЗАПАСА'); this.audio.ui(); });
    this.events.on('weapon:fired', ({ weapon }) => this.audio.shot(weapon.id));
    this.events.on('craft:unlocked', ({ recipe }) => this.hud.showMessage(`СХЕМА КРАФТА: ${recipe.name}`, 1.5));
    this.events.on('craft:completed', () => this.audio.pickup());
    this.events.on('spore:collected', () => { this.hud.showMessage('+1 СПОРА О-41', 0.65); this.audio.pickup(); });
    this.events.on('quest:pickup', () => this.audio.pickup());
    this.events.on('slime:attuned', ({ value }) => { this.audio.slimeContact?.(value); this.hud.showMessage(`О-41 // РЕЗОНАНС ${value}`, 1.1); });
    this.events.on('slime:enter', ({ kind }) => { if (kind === 'hazard') this.audio.previewAmbient('sporeHiss'); });
    this.events.on('inventory:full', () => this.hud.showMessage('РЮКЗАК ЗАПОЛНЕН')); 
    this.events.on('player:damaged', ({ source } = {}) => { this.hud.flashDamage(); this.audio.playerHit(source); });
    this.events.on('player:died', () => this.hud.showDeath());
    this.events.on('enemy:wail', (payload = {}) => { this.player.applyWail(); this.hud.jamCompass(); this.audio.wail(payload); });
    this.events.on('boss:immune', () => this.hud.showMessage('РЕАКЦИИ НЕТ // НУЖЕН РЕЗОНАТОР', 0.8));
    this.events.on('enemy:damaged', (payload) => this.audio.enemyHit(payload));
    this.events.on('enemy:killed', (payload) => this.audio.enemyDeath(payload));
    this.events.on('enemy:voice', (payload) => this.audio.enemyVoice(payload));
    this.events.on('enemy:attack', (payload) => this.audio.enemyAttack(payload));
    this.events.on('enemy:sporeBurst', (payload) => this.audio.sporeBurst(payload));
    this.events.on('weapon:fungalBurst', (payload) => this.audio.fungalBurst(payload));
    this.events.on('level:exit-opened', () => this.audio.door());
    this.events.on('boss:phase', ({ phase }) => this.audio.bossPhase(phase));
    this.events.on('player:shield', () => this.audio.shield());
    this.events.on('narrative:line', (line) => this.audio.narrativeLine(line));
    this.events.on('narrative:end', () => this.audio.stopRadio());
    this.events.on('narrative:interrupt', () => this.audio.stopRadio());
    this.events.on('infection:tier', ({ to }) => {
      const labels = ['НОРМА', 'СПОРЫ В КРОВИ', 'СЕНСОРНЫЕ СБОИ', 'РЕЗОНАНС', 'КРИТИЧЕСКИЙ РЕЗОНАНС'];
      this.hud.setSystemLine(`БИОСКАНЕР // ${labels[to]}`);
      if (to >= 2) this.hud.showMessage(labels[to], 1.2);
      this.audio.infectionTier(to);
    });
    this.events.on('infection:inhaler', () => { this.hud.showMessage('ИНГАЛЯТОР // СЕНСОРНАЯ ПОГРЕШНОСТЬ', 1.2); this.audio.inhaler(); });
    this.events.on('world:teleport', ({ kind }) => { this.hud.showMessage(kind === 'loop' ? 'КООРДИНАТЫ НЕ ИЗМЕНИЛИСЬ' : 'ПРОСТРАНСТВЕННАЯ ОШИБКА', 0.9); this.audio.teleport(kind); });
    this.events.on('world:hallucination', ({ active }) => { this.hallucination = active ? 1 : 0; });
    this.events.on('world:flicker', ({ strength = 1 } = {}) => { this.flicker = Math.max(this.flicker, strength); this.audio.flicker(); });
    this.events.on('audio:hallucination', () => { this.audio.tone(72, 0.42, 'sine', 0.07, 18); });
    this.events.on('level:complete', ({ to }) => {
      if (this.gameEnded) return;
      this.audio.transition();
      this.loadLevel(to);
    });
    this.events.on('game:ending', ({ ending }) => {
      this.audio.ending(ending);
      this.gameEnded = true;
      this.paused = true;
      this.endingEffect = ({ burn: -1, merge: 1, broadcast: 2, sever: -2 }[ending] ?? 0);
      this.hud.showEnding(ending);
      document.exitPointerLock?.();
    });
  }

  loadLevel(id) {
    this.narrative.interrupt();
    this.weapons.clear();
    this.currentLevel = id;
    this.currentLevelContext = this.levelFactory.load(id);
    this.audio.setLevel(id, this.currentLevelContext.audio ?? {});
    this.player.resetForLevel(this.currentLevelContext.spawn, this.currentLevelContext.yaw);
    const meta = LEVEL_META[id];
    this.hud.showTransition(meta);
    this.hud.setSystemLine(`К.О.Н.Т.У.Р. // ${meta.title} // ${meta.contour}`);
    this.#resize();
  }

  #update(dt) {
    this.time += dt;
    this.flicker = Math.max(0, this.flicker - dt * 3.2);
    if (!this.started) {
      this.retro.render(this.scene, this.camera, this.time, {});
      return;
    }

    if (this.input.consume('KeyI') && !this.gameEnded && !this.player.dead) {
      this.paused = !this.paused;
      this.hud.setPauseVisible(this.paused);
      this.audio.ui();
      if (this.paused) document.exitPointerLock?.();
      else this.input.requestPointerLock();
    }

    if (this.input.consume('Space')) this.narrative.skip();
    if (this.input.consume('KeyM')) this.hud.showMessage(this.audio.toggleMute() ? 'ЗВУК // ВЫКЛ' : 'ЗВУК // ВКЛ', 0.7);
    if (this.input.consume('KeyR') && this.player.dead) location.reload();

    if (!this.paused && !this.player.dead && !this.gameEnded) {
      if (this.input.consume('KeyH')) this.#useInhaler();
      if (this.input.consume('KeyQ')) this.#useShield();
      this.player.update(dt, false);
      this.weapons.update(dt, false);
      this.enemies.update(dt, this.player.position);
      this.sporeManager.update(this.time, this.player.position);
      this.slime.update(dt, this.player.position);
      this.interactions.update(this.player.position, this.input, this.hud);
      this.triggers.update(this.player.position);
      this.levelFactory.update(dt);
      this.infection.update(dt);
      this.narrative.update(dt);
    } else {
      this.player.update(dt, true);
      this.weapons.update(dt, true);
      this.infection.update(dt);
      this.narrative.update(dt);
    }

    const meta = LEVEL_META[this.currentLevel];
    const moving = !this.paused && !this.player.dead && (
      this.input.down('KeyW') || this.input.down('KeyS') || this.input.down('KeyA') || this.input.down('KeyD')
    );
    let minEnemyDistance = Infinity;
    for (const enemy of this.enemies.enemies) {
      if (!enemy.alive) continue;
      minEnemyDistance = Math.min(minEnemyDistance, enemy.group.position.distanceTo(this.player.position));
    }
    const danger = Number.isFinite(minEnemyDistance) ? Math.max(0, 1 - minEnemyDistance / 7) : 0;
    this.audio.update(dt, {
      level: this.currentLevel,
      position: this.player.position,
      yaw: this.player.yaw,
      health: this.player.health,
      maxHealth: this.player.maxHealth,
      infection: this.infection.value / 100,
      danger,
      moving,
      slowed: this.player.slowTimer > 0,
      paused: this.paused,
      dead: this.player.dead
    });

    this.hud.update(dt, {
      player: this.player,
      infection: this.infection,
      inventory: this.inventory,
      belt: this.belt,
      crafting: this.crafting,
      objective: this.objective,
      enemies: this.enemies,
      spores: this.sporeManager,
      levelMeta: meta,
      slime: this.slime
    });

    this.retro.render(this.scene, this.camera, this.time, {
      infection: this.infection.distortion,
      wail: this.enemies.wailDistortion,
      hive: this.enemies.hiveDistortion,
      slime: this.slime.intensity,
      slimeHazard: this.slime.hazard,
      hallucination: this.hallucination,
      ending: this.endingEffect,
      flicker: this.flicker
    });
    this.input.endFrame();
  }

  #useInhaler() {
    if (!this.inventory.remove('inhaler', 1)) {
      this.hud.showMessage('ИНГАЛЯТОР НЕ СОБРАН');
      return;
    }
    this.infection.useInhaler();
    this.player.heal(1.5);

  }

  #useShield() {
    if (!this.inventory.remove('shield', 1)) {
      this.hud.showMessage('ЩИТ НЕ СОБРАН');
      return;
    }
    this.player.activateShield(6);

  }

  #resize() {
    const { aspect } = this.retro.resize();
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }
}
