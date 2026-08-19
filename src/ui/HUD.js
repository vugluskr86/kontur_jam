import { AMMO_LABELS, WEAPONS } from '../data/weapons.js';
import { RECIPES } from '../game/CraftingSystem.js';

export class HUD {
  constructor(root) {
    this.root = root;
    this.messageTimer = 0;
    this.inventoryVisible = false;
    this.compassJam = 0;
    this.transitionTimer = 0;
    this.#build();
    this.radarCtx = this.radar.getContext('2d', { alpha: false });
  }

  #build() {
    this.root.innerHTML = `
      <div id="shell">
        <header id="topbar">
          <div class="weapon-slot active" data-belt="0"><span class="slot-index">1</span><strong id="belt0Name">ПМ</strong><small id="belt0Ammo">∞</small></div>
          <div class="weapon-slot" data-belt="1"><span class="slot-index">2</span><strong id="belt1Name">—</strong><small id="belt1Ammo">—</small></div>
          <div class="instrument"><span>КОНТУР</span><b id="contourText">1-Й</b></div>
          <div class="instrument health-number"><span>СОСТОЯНИЕ</span><b id="healthNum">08</b></div>
          <div class="instrument"><span>О-41 / СПОРЫ</span><b id="sporeCount">00</b></div>
        </header>

        <main id="viewportFrame">
          <div id="viewport">
            <div id="crosshair"></div>
            <div id="damageFlash"></div>
            <div id="shieldOverlay"></div>
            <div id="worldMessage"></div>
            <div id="interactionPrompt"></div>
            <div id="objectiveBox"><span>ФОКУС</span><b id="objectiveText"></b></div>
            <div id="subtitle"><b id="subtitleSpeaker"></b><span id="subtitleText"></span></div>
            <div id="transition"><div id="transitionCode">КОНТУР-041</div><strong id="transitionTitle"></strong><small id="transitionSubtitle"></small></div>
            <div id="ending"></div>
            <div id="mobileControls" aria-label="Mobile controls">
              <div class="mobile-stick" id="moveStick"><i id="moveKnob"></i><span>MOVE</span></div>
              <div class="mobile-stick" id="lookStick"><i id="lookKnob"></i><span>LOOK</span></div>
              <div class="mobile-actions">
                <button id="mobileFire" class="mobile-fire">FIRE</button>
                <button data-mobile-action="KeyE">E<br><small>USE</small></button>
                <button data-mobile-action="Digit1">1</button>
                <button data-mobile-action="Digit2">2</button>
                <button data-mobile-action="KeyI">II<br><small>MENU</small></button>
              </div>
            </div>
          </div>
        </main>

        <footer id="bottom">
          <section class="panel radar-panel">
            <canvas id="radar" width="220" height="100"></canvas>
            <div class="radar-side"><b>БИО</b><span id="contacts">КОНТ: 0</span><span id="compassText">000°</span><span>167.05 MHz</span></div>
          </section>

          <section class="panel status-panel">
            <div class="telemetry-row"><span id="systemLine">К.О.Н.Т.У.Р. // КАНАЛ 041</span><span id="resonanceText">РЕЗОНАНС: 0</span></div>
            <div class="meters">
              <div><label>ЗДОРОВЬЕ <span id="hpText">8/8</span></label><div id="healthCells"></div></div>
              <div><label>ЗАРАЖЕНИЕ <span id="infectionText">0%</span></label><div class="infection-track"><div id="infectionFill"></div></div></div>
            </div>
            <div class="quick-help">I — ИНВЕНТАРЬ · H — ИНГАЛЯТОР · Q — ЩИТ · M — ЗВУК</div>
          </section>
        </footer>
      </div>

      <div id="pauseOverlay">
        <div class="pause-window">
          <header><b>ПОЛЕВОЙ КОМПЛЕКС</b><span>I — ЗАКРЫТЬ</span></header>
          <div class="pause-grid">
            <section><h2>РЮКЗАК / 4 СЛОТА</h2><div id="pauseInventory"></div><p class="help">H — использовать ингалятор<br>Q — активировать мицелиевый щит</p></section>
            <section><h2>КРАФТ О-41</h2><div id="recipes"></div></section>
            <section><h2>ОРУЖЕЙНЫЙ ПОЯС / 2 СЛОТА</h2><div id="weapons"></div></section>
          </div>
        </div>
      </div>

      <div id="startOverlay">
        <div class="start-card">
          <div class="stamp">СОВ. СЕКРЕТНО</div>
          <h1>КОНТУР-041</h1>
          <p>ОБЪЕКТ «ГИДРОЛОГИЯ-7» · ZОНА-14 · 1986</p>
          <p class="controls">WASD — движение · мышь — обзор · ЛКМ — огонь<br>E — взаимодействие · 1/2 — оружие · I — инвентарь<br>H — ингалятор · Q — щит · M — звук</p>
          <div class="start-actions"><button id="startButton">ВОЙТИ В 1-Й КОНТУР</button><a class="sandbox-link" href="./audio-sandbox.html">AUDIO SANDBOX</a></div>
        </div>
      </div>

      <div id="orientationWarning" role="alert">
        <div><b>ROTATE DEVICE</b><span>KONTUR-041 REQUIRES LANDSCAPE ORIENTATION</span></div>
      </div>

      <div id="levelTravel" aria-live="assertive">
        <div class="travel-door travel-door-left"></div>
        <div class="travel-door travel-door-right"></div>
        <div class="travel-scanlines"></div>
        <div class="travel-readout"><span>CONTOUR TRANSFER</span><b id="travelTitle"></b><small id="travelSubtitle"></small></div>
      </div>
    `;

    const q = (selector) => this.root.querySelector(selector);
    this.shell = q('#shell'); this.viewport = q('#viewport'); this.startOverlay = q('#startOverlay'); this.startButton = q('#startButton');
    this.pauseOverlay = q('#pauseOverlay'); this.worldMessage = q('#worldMessage'); this.interactionPrompt = q('#interactionPrompt'); this.objectiveText = q('#objectiveText');
    this.subtitle = q('#subtitle'); this.subtitleSpeaker = q('#subtitleSpeaker'); this.subtitleText = q('#subtitleText');
    this.transition = q('#transition'); this.transitionTitle = q('#transitionTitle'); this.transitionSubtitle = q('#transitionSubtitle');
    this.ending = q('#ending'); this.damageFlash = q('#damageFlash'); this.shieldOverlay = q('#shieldOverlay');
    this.radar = q('#radar'); this.contacts = q('#contacts'); this.compassText = q('#compassText'); this.contourText = q('#contourText');
    this.healthNum = q('#healthNum'); this.sporeCount = q('#sporeCount'); this.hpText = q('#hpText'); this.infectionText = q('#infectionText'); this.infectionFill = q('#infectionFill');
    this.healthCells = q('#healthCells'); this.pauseInventory = q('#pauseInventory'); this.recipes = q('#recipes'); this.weapons = q('#weapons');
    this.systemLine = q('#systemLine'); this.resonanceText = q('#resonanceText');
    this.mobileControls = q('#mobileControls'); this.moveStick = q('#moveStick'); this.moveKnob = q('#moveKnob'); this.lookStick = q('#lookStick'); this.lookKnob = q('#lookKnob'); this.mobileFire = q('#mobileFire'); this.mobileActions = [...this.root.querySelectorAll('[data-mobile-action]')]; this.orientationWarning = q('#orientationWarning');
    this.levelTravel = q('#levelTravel'); this.travelTitle = q('#travelTitle'); this.travelSubtitle = q('#travelSubtitle');
    this.beltSlots = [...this.root.querySelectorAll('.weapon-slot')];
    this.belt0Name = q('#belt0Name'); this.belt1Name = q('#belt1Name'); this.belt0Ammo = q('#belt0Ammo'); this.belt1Ammo = q('#belt1Ammo');

    for (let i = 0; i < 8; i++) {
      const cell = document.createElement('i'); cell.className = 'hp-cell'; this.healthCells.appendChild(cell);
    }
    this.hpCells = [...this.healthCells.children];
  }

  bindStart(handler) { this.startButton.addEventListener('click', handler); }
  bindCraft(handler) { this.recipes.addEventListener('click', (event) => { const button = event.target.closest('[data-craft]'); if (button) handler(button.dataset.craft); }); }
  bindEquip(handler) { this.weapons.addEventListener('click', (event) => { const button = event.target.closest('[data-equip]'); if (button) handler(Number(button.dataset.slot), button.dataset.equip); }); }
  mobileControlElements() { return { moveStick: this.moveStick, moveKnob: this.moveKnob, lookStick: this.lookStick, lookKnob: this.lookKnob, fireButton: this.mobileFire, actionButtons: this.mobileActions }; }

  setPointerLocked(locked) { if (locked) this.startOverlay.classList.add('hidden'); }
  setPauseVisible(visible) { this.inventoryVisible = visible; this.pauseOverlay.classList.toggle('visible', visible); }
  setOrientationWarning(visible) { this.orientationWarning.classList.toggle('visible', visible); }
  setLevelTravel(meta) {
    this.travelTitle.textContent = `${meta.number}. ${meta.title}`;
    this.travelSubtitle.textContent = meta.contour;
    this.levelTravel.classList.remove('active');
    void this.levelTravel.offsetWidth;
    this.levelTravel.classList.add('active');
  }
  clearLevelTravel() { this.levelTravel.classList.remove('active'); }
  setInteractionPrompt(text) { this.interactionPrompt.textContent = text; }
  setObjective(text) { this.objectiveText.textContent = text || '—'; }
  setSystemLine(text) { this.systemLine.textContent = text; }

  showMessage(text, seconds = 1.2) {
    this.worldMessage.textContent = text; this.worldMessage.classList.add('visible'); this.messageTimer = seconds;
  }

  showSubtitle(speaker, text) { this.subtitleSpeaker.textContent = speaker; this.subtitleText.textContent = text; this.subtitle.classList.add('visible'); }
  hideSubtitle() { this.subtitle.classList.remove('visible'); }

  showTransition(meta) {
    this.shell.dataset.palette = meta.palette;
    const palettes = { industrial: ['#557866','#d3b953'], archive: ['#416c62','#9fc56b'], reactor: ['#7a5d35','#d07035'], organic: ['#5f4937','#82a44d'], white: ['#8098a0','#d8dfd5'] };
    const [zone, zoneText] = palettes[meta.palette] ?? palettes.industrial;
    this.shell.style.setProperty('--zone', zone); this.shell.style.setProperty('--zoneText', zoneText);
    this.transitionTitle.textContent = `${meta.number}. ${meta.title}`; this.transitionSubtitle.textContent = meta.contour;
    this.transition.classList.add('visible'); this.transitionTimer = 2.25; this.contourText.textContent = meta.contour.replace(' КОНТУР', '');
  }

  jamCompass(seconds = 2.5) { this.compassJam = Math.max(this.compassJam, seconds); }
  flashDamage() { this.damageFlash.classList.remove('hit'); void this.damageFlash.offsetWidth; this.damageFlash.classList.add('hit'); }

  showEnding(kind) {
    const endings = {
      burn: ['burn', 'ЗАЧИСТКА ПОДТВЕРЖДЕНА', 'Контур уничтожен. Официальный отчёт снова называет О-41 аварийным биологическим агентом. Последний пакет телеметрии Скальпеля обрывается перед детонацией.', 'ПРЕДУПРЕЖДЕНИЕ НЕ ВЫШЛО ЗА ПЕРИМЕТР.'],
      merge: ['merge', 'НОВЫЙ УЗЕЛ', 'Скальпель перестаёт различать собственную память и память сети. Через несколько недель один и тот же белый коридор появляется во снах людей далеко от Zоны-14.', 'СИГНАЛ ВЫШЕЛ. ИМЯ — НЕТ.'],
      broadcast: ['broadcast', 'ПЕРЕДАЧА 167.05', 'Архивные данные, резонансные фрагменты и собственный нейропаттерн Скальпеля складываются в пакет. О-41 остаётся в Контуре, но предупреждение уходит через штатные ретрансляторы.', 'СИГНАЛ ВЫШЕЛ ЗА ПЕРИМЕТР. НОСИТЕЛЬ СОХРАНЁН.'],
      sever: ['sever', 'РАЗРЫВ КОНТАКТА', 'Резонатор выжигает связь между Скальпелем и сетью, не уничтожая сам О-41. Штаб получает неполный отчёт. Внутри объекта снова становится тихо — слишком тихо.', 'НИ ОДНА СТОРОНА НЕ ПОЛУЧИЛА ПОЛНОГО ОТВЕТА.']
    };
    const [cls, title, body, foot] = endings[kind] ?? endings.burn;
    this.ending.innerHTML = `<div class="ending-card ${cls}"><b>${title}</b><p>${body}</p><small>${foot}</small></div>`;
    this.ending.classList.add('visible');
  }

  showDeath() {
    this.ending.innerHTML = `<div class="ending-card burn"><b>СВЯЗЬ ПОТЕРЯНА</b><p>ОПЕРАТИВНИК «СКАЛЬПЕЛЬ» НЕ ОТВЕЧАЕТ.</p><small>R — ПЕРЕЗАПУСК</small></div>`;
    this.ending.classList.add('visible');
  }

  update(dt, state) {
    this.messageTimer = Math.max(0, this.messageTimer - dt); if (this.messageTimer <= 0) this.worldMessage.classList.remove('visible');
    this.compassJam = Math.max(0, this.compassJam - dt); this.transitionTimer = Math.max(0, this.transitionTimer - dt); if (this.transitionTimer <= 0) this.transition.classList.remove('visible');

    const { player, infection, inventory, belt, crafting, objective, enemies, spores, levelMeta, slime } = state;
    const health = Math.ceil(player.health);
    this.healthNum.textContent = String(health).padStart(2, '0'); this.hpText.textContent = `${health}/${player.maxHealth}`;
    this.hpCells.forEach((cell, index) => cell.classList.toggle('on', index < health));

    const infectionValue = Math.round(infection.value);
    const lieOffset = (((performance.now() / 260) | 0) % 2 === 0) ? 7 : -5;
    const displayedInfection = infection.hudIsLying ? Math.max(0, Math.min(99, infectionValue + lieOffset)) : infectionValue;
    this.infectionText.textContent = `${displayedInfection}%`; this.infectionFill.style.width = `${infectionValue}%`;
    this.sporeCount.textContent = String(inventory.count('spores')).padStart(2, '0');
    this.resonanceText.textContent = `РЕЗОНАНС: ${slime?.attunement ?? 0}`;
    this.shieldOverlay.classList.toggle('active', player.shieldTimer > 0); this.setObjective(objective.text);
    if (levelMeta) this.contourText.textContent = levelMeta.contour.replace(' КОНТУР', '');

    this.#updateBelt(belt, infection); this.#updateInventory(inventory, crafting, belt); this.#drawRadar(state);
  }

  #updateBelt(belt, infection) {
    const ids = belt.slots; const names = [this.belt0Name, this.belt1Name]; const ammoNodes = [this.belt0Ammo, this.belt1Ammo];
    for (let i = 0; i < 2; i++) {
      const id = ids[i]; const weapon = id ? WEAPONS[id] : null; names[i].textContent = weapon?.short ?? '—';
      if (!weapon) ammoNodes[i].textContent = '—';
      else if (!weapon.ammo) ammoNodes[i].textContent = '∞';
      else {
        const real = belt.ammo[weapon.ammo] ?? 0;
        const shown = infection.hudIsLying && i === belt.activeSlot ? Math.max(0, real + (((performance.now() / 180) | 0) % 3 - 1) * 3) : real;
        ammoNodes[i].textContent = `${AMMO_LABELS[weapon.ammo] ?? weapon.ammo}:${shown}`;
      }
      this.beltSlots[i].classList.toggle('active', i === belt.activeSlot);
    }
  }

  #updateInventory(inventory, crafting, belt) {
    const slotHtml = inventory.snapshot().map((slot, index) => `<div class="inv-slot ${slot ? 'full' : ''}"><span>${index + 1}</span><b>${slot?.name ?? 'ПУСТО'}</b><small>${slot ? `x${slot.count}` : ''}</small></div>`).join('');
    this.pauseInventory.innerHTML = slotHtml;
    this.recipes.innerHTML = Object.values(RECIPES).map((recipe) => {
      const unlocked = crafting.unlocked.has(recipe.requiresUnlock);
      const cost = Object.entries(recipe.cost).map(([id, count]) => `${id === 'spores' ? 'СПОРЫ' : id} x${count}`).join(', ');
      return `<div class="recipe ${unlocked ? '' : 'locked'}"><b>${recipe.name}</b><small>${unlocked ? cost : 'СХЕМА НЕИЗВЕСТНА'}</small><button data-craft="${recipe.id}" ${!unlocked || !crafting.canCraft(recipe.id) ? 'disabled' : ''}>СОБРАТЬ</button></div>`;
    }).join('');
    this.weapons.innerHTML = [...belt.unlocked].map((id) => {
      const weapon = WEAPONS[id];
      return `<div class="weapon-card"><b>${weapon.name}</b><small>${weapon.ammo ? `${AMMO_LABELS[weapon.ammo]}: ${belt.ammo[weapon.ammo] ?? 0}` : 'БОЕЗАПАС: ∞'}</small><div><button data-equip="${id}" data-slot="0">В СЛОТ 1</button><button data-equip="${id}" data-slot="1">В СЛОТ 2</button></div></div>`;
    }).join('');
  }

  #drawRadar(state) {
    const ctx = this.radarCtx; const w = this.radar.width, h = this.radar.height;
    ctx.fillStyle = '#020403'; ctx.fillRect(0, 0, w, h); ctx.strokeStyle = '#173f34'; ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 12) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
    for (let y = 0; y < h; y += 12) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
    const player = state.player.position; const scale = 5.0;
    const toRadar = (pos) => ({ x: w / 2 + (pos.x - player.x) * scale, y: h / 2 + (pos.z - player.z) * scale });
    const dot = (pos, color, size = 4) => { const p = toRadar(pos); if (p.x < 2 || p.y < 2 || p.x > w - 2 || p.y > h - 2) return; ctx.fillStyle = color; ctx.fillRect(Math.round(p.x-size/2), Math.round(p.y-size/2), size, size); };
    if (this.compassJam <= 0) {
      for (const enemy of state.enemies.enemies) if (enemy.alive) dot(enemy.group.position, '#99482c', enemy.type === 'hive' ? 6 : 4);
      for (const spore of state.spores.items) dot(spore.group.position, '#55b64a', 3);
      if (state.objective.target) dot(state.objective.target, '#caa348', 5);
    } else {
      for (let i = 0; i < 8; i++) dot({ x: player.x + Math.sin(i * 3.4 + performance.now()*0.002)*8, z: player.z + Math.cos(i*2.1)*8 }, i%2 ? '#99482c' : '#55b64a', 3);
    }
    ctx.fillStyle = '#d8dfd5'; ctx.fillRect(w/2-2,h/2-2,4,4); ctx.strokeStyle = '#d8dfd5'; ctx.beginPath(); ctx.moveTo(w/2,h/2); ctx.lineTo(w/2-Math.sin(state.player.yaw)*12,h/2-Math.cos(state.player.yaw)*12); ctx.stroke();
    const degree = ((-state.player.yaw * 180 / Math.PI) % 360 + 360) % 360;
    const shownDegree = this.compassJam > 0 ? (degree + Math.sin(performance.now()*0.018)*120 + 360)%360 : degree;
    this.compassText.textContent = `${String(Math.round(shownDegree)).padStart(3,'0')}°`; this.contacts.textContent = `КОНТ: ${state.enemies.alive().length}`;
  }
}
