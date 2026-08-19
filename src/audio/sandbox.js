import './sandbox.css';
import { AudioSystem } from './AudioSystem.js';
import {
  DEFAULT_AUDIO_CONFIG, cloneAudioConfig, normalizeAudioConfig,
  loadAudioConfigFromStorage, saveAudioConfigToStorage, AUDIO_CONFIG_STORAGE_KEY
} from './audioConfig.js';

const root = document.querySelector('#audioSandbox');
let config = loadAudioConfigFromStorage();
const audio = new AudioSystem({ config });
let level = 'perimeter';
let running = false;

root.innerHTML = `
<div class="sandbox">
  <div class="head">
    <div><h1>КОНТУР-041 · AUDIO SANDBOX</h1><p>Procedural WebAudio mixer / dark ambient / SFX · обмен пресетами через JSON</p></div>
    <div class="row"><button id="unlock">ВКЛЮЧИТЬ АУДИО</button><button id="mute">MUTE</button><a href="./" style="color:#8fb09e">← ИГРА</a></div>
  </div>
  <div class="grid">
    <section class="card"><h2>МИКШЕР</h2><div id="mixer"></div></section>
    <section class="card"><h2>ТЕЛО / РАДИО</h2><div id="bodyRadio"></div><div class="row"><button data-preview="breath">ДЫХАНИЕ</button><button data-preview="heart">СЕРДЦЕ</button><button data-preview="radio">РАЦИЯ</button><button data-preview="signal">О-41</button><button data-preview="door">ШЛЮЗ</button><button data-preview="shot">ПМ</button></div></section>
    <section class="card"><h2>МРАЧНЫЙ ЭМБИЕНТ</h2><div id="darkAmbient"></div><p class="hint">Низкий трёхголосный drone + медленная амплитудная модуляция + фильтрованный шум. Это постоянный фон, не музыка.</p></section>
    <section class="card"><h2>ПРОФИЛЬ УРОВНЯ</h2><div class="row" style="margin-bottom:10px"><select id="level">${Object.keys(DEFAULT_AUDIO_CONFIG.profiles).map(id=>`<option value="${id}">${id}</option>`).join('')}</select></div><div id="profile"></div></section>
    <section class="card wide"><h2>ПРОСЛУШИВАНИЕ СОБЫТИЙ ОКРУЖЕНИЯ</h2><div id="events" class="event-grid"></div></section>
    <section class="card wide"><h2>JSON PRESET</h2><div class="row" style="margin-bottom:9px"><button id="copy">КОПИРОВАТЬ JSON</button><button id="apply">ПРИМЕНИТЬ JSON</button><button id="save">СОХРАНИТЬ ДЛЯ ИГРЫ</button><button id="reload">ЗАГРУЗИТЬ СОХРАНЁННЫЙ</button><button id="reset">СБРОС</button></div><textarea id="json"></textarea><div class="status" id="status"></div><p class="hint">«Сохранить для игры» пишет пресет в localStorage ключ <b>${AUDIO_CONFIG_STORAGE_KEY}</b>. Для передачи настроек между машинами используйте только JSON из поля выше.</p></section>
  </div>
</div>`;

const $ = (s) => root.querySelector(s);
const json = $('#json');
const status = $('#status');

function getPath(obj, path) { return path.split('.').reduce((acc, key) => acc?.[key], obj); }
function setPath(obj, path, value) {
  const parts = path.split('.'); let cursor = obj;
  for (const key of parts.slice(0, -1)) cursor = cursor[key] ?? (cursor[key] = {});
  cursor[parts.at(-1)] = value;
}
function control(label, path, min, max, step) {
  const value = getPath(config, path);
  return `<label class="control"><span>${label}</span><input type="range" data-path="${path}" min="${min}" max="${max}" step="${step}" value="${value}"><output>${Number(value).toFixed(step < 0.01 ? 3 : step < 1 ? 2 : 0)}</output></label>`;
}

function checkboxControl(label, path) {
  const checked = Boolean(getPath(config, path));
  return `<label class="control check-control"><span>${label}</span><input type="checkbox" data-bool-path="${path}" ${checked ? 'checked' : ''}><output>${checked ? 'ON' : 'OFF'}</output></label>`;
}
function render() {
  $('#mixer').innerHTML = [
    control('MASTER','master',0,0.65,0.01), control('AMBIENCE','buses.ambience',0,1.2,0.01),
    control('DARK AMBIENT','buses.darkAmbient',0,1.2,0.01), control('BODY','buses.body',0,1.2,0.01),
    control('RADIO','buses.radio',0,1.2,0.01), control('SFX','buses.sfx',0,1.2,0.01)
  ].join('');
  $('#bodyRadio').innerHTML = [
    control('ДЫХАНИЕ','body.breathGain',0,2,0.01), control('СЕРДЦЕ','body.heartbeatGain',0,2,0.01),
    control('ШАГИ','body.footstepGain',0,2,0.01), control('SQUELCH','radio.squelchGain',0,2,0.01),
    control('RADIO HISS','radio.hissGain',0,2,0.01), control('O-41 SIGNAL','radio.signalGain',0,2,0.01)
  ].join('');
  $('#darkAmbient').innerHTML = [
    checkboxControl('ENABLED','darkAmbient.enabled'), control('GLOBAL GAIN','darkAmbient.globalGain',0,1.5,0.01), control('PULSE DEPTH','darkAmbient.pulseDepth',0,0.8,0.01),
    control('PULSE Hz','darkAmbient.pulseHz',0.005,0.25,0.005), control('NOISE','darkAmbient.noiseGain',0,0.15,0.001)
  ].join('');
  const base = `profiles.${level}`;
  $('#profile').innerHTML = [
    control('ROOT Hz',`${base}.ambientRoot`,20,120,1), control('DRONE GAIN',`${base}.ambientGain`,0,0.15,0.001),
    control('DETUNE',`${base}.ambientDetune`,0,80,1), control('BRIGHTNESS',`${base}.ambientBrightness`,80,3000,10),
    control('HUM GAIN',`${base}.humGain`,0,0.10,0.001), control('NOISE GAIN',`${base}.noiseGain`,0,0.12,0.001),
    control('NOISE CUTOFF',`${base}.noiseCutoff`,80,3500,10), control('EVENT MIN',`${base}.eventMin`,0.5,15,0.1),
    control('EVENT MAX',`${base}.eventMax`,1,25,0.1)
  ].join('');
  $('#events').innerHTML = config.profiles[level].events.map(type=>`<button data-event="${type}">${type}</button>`).join('');
  json.value = JSON.stringify(config, null, 2);
  bindRanges();
}
function bindRanges() {
  root.querySelectorAll('input[data-path]').forEach(input => input.addEventListener('input', () => {
    setPath(config, input.dataset.path, Number(input.value));
    input.nextElementSibling.textContent = Number(input.value).toFixed(Number(input.step) < 0.01 ? 3 : Number(input.step) < 1 ? 2 : 0);
    apply(false);
  }));
  root.querySelectorAll('input[data-bool-path]').forEach(input => input.addEventListener('change', () => {
    setPath(config, input.dataset.boolPath, input.checked);
    input.nextElementSibling.textContent = input.checked ? 'ON' : 'OFF';
    apply(false);
  }));
}
function apply(rerender = true) {
  config = normalizeAudioConfig(config);
  audio.setConfig(config);
  audio.setLevel(level, { emitters: [] });
  if (rerender) render(); else json.value = JSON.stringify(config, null, 2);
}
function say(text) { status.textContent = text; setTimeout(()=>{ if(status.textContent===text)status.textContent=''; },2200); }

$('#unlock').addEventListener('click', () => {
  audio.unlock(); audio.setLevel(level, { emitters: [] }); running = true; $('#unlock').textContent='АУДИО АКТИВНО'; say('WebAudio разблокирован.');
});
$('#mute').addEventListener('click',()=>audio.toggleMute());
$('#level').addEventListener('change', e=>{ level=e.target.value; audio.setLevel(level,{emitters:[]}); render(); $('#level').value=level; });
root.addEventListener('click', e=>{
  const p=e.target.closest('[data-preview]'); if(p){ audio.unlock(); const k=p.dataset.preview; if(k==='breath')audio.breath(1); if(k==='heart')audio.heartbeat(.65); if(k==='radio')audio.narrativeLine({speaker:'К.О.Н.Т.У.Р.',duration:2.5}); if(k==='signal')audio.narrativeLine({speaker:'О-41',duration:2.5}); if(k==='door')audio.door(); if(k==='shot')audio.shot('pm'); }
  const ev=e.target.closest('[data-event]'); if(ev){ audio.unlock(); audio.previewAmbient(ev.dataset.event); }
});
$('#copy').addEventListener('click', async()=>{ json.value=JSON.stringify(config,null,2); try{await navigator.clipboard.writeText(json.value);say('JSON скопирован.')}catch{json.select();document.execCommand('copy');say('JSON выделен/скопирован.')} });
$('#apply').addEventListener('click',()=>{ try{config=normalizeAudioConfig(JSON.parse(json.value));apply();$('#level').value=level;say('JSON применён.')}catch(err){say('Ошибка JSON: '+err.message)} });
$('#save').addEventListener('click',()=>{ config=saveAudioConfigToStorage(config);say('Пресет сохранён для игры в этом браузере.'); });
$('#reload').addEventListener('click',()=>{ config=loadAudioConfigFromStorage();apply();$('#level').value=level;say('Сохранённый пресет загружен.'); });
$('#reset').addEventListener('click',()=>{ config=cloneAudioConfig();apply();$('#level').value=level;say('Настройки сброшены.'); });

let last=performance.now();
function tick(now){const dt=Math.min(.05,(now-last)/1000);last=now;if(running)audio.update(dt,{position:{x:0,z:0},yaw:0,health:8,maxHealth:8,infection:.16,danger:.08,moving:false,paused:false,dead:false});requestAnimationFrame(tick)}
requestAnimationFrame(tick);
render(); $('#level').value=level;
