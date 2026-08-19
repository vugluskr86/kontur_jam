# КОНТУР-041 — AudioSystem / environment design

Версия: **0.6.0**

## Цель

Звук является частью HUD и повествования. Он должен:

1. сообщать состояние игрока без дополнительных индикаторов;
2. создавать разные акустические «силуэты» пяти уровней;
3. заранее выдавать угрозы вне поля зрения;
4. различать источник повествования — радио, запись, биосканер или О-41;
5. позволять дизайнеру быстро менять характер сцены без переписывания WebAudio-кода.

## Архитектура

Gameplay публикует semantic events, например:

```text
weapon:fired
narrative:line
enemy:wail
enemy:voice
enemy:sporeBurst
slime:attuned
world:teleport
level:exit-opened
```

Только `AudioSystem` создаёт WebAudio nodes.

Шины:

```text
master
├── ambience
├── darkAmbient
├── body
├── radio
└── sfx
```

Это позволяет позднее заменить procedural prototype-звуки на WAV/OGG samples без изменения игровых систем.

## Continuous dark ambient

В 0.6 добавлен отдельный постоянный фон вместо попытки заполнить пустоту частыми random-SFX.

Он собирается процедурно:

- три detuned low oscillators (`root × 1`, `×1.497`, `×2.013`);
- low-pass filtering по профилю уровня;
- очень медленная amplitude modulation;
- filtered noise-bed;
- собственная `darkAmbient` bus.

Это **не музыка** и не должен превращаться в заметную мелодию. Он создаёт давление, поверх которого остаётся место дыханию, радио и позиционным угрозам.

## Audio config

Источник defaults: `src/audio/audioConfig.js`.

Основная схема:

```json
{
  "version": 1,
  "master": 0.22,
  "buses": {
    "ambience": 0.62,
    "darkAmbient": 0.52,
    "body": 0.72,
    "radio": 0.90,
    "sfx": 0.92
  },
  "darkAmbient": {
    "enabled": true,
    "globalGain": 0.62,
    "pulseDepth": 0.22,
    "pulseHz": 0.055,
    "noiseGain": 0.028
  },
  "profiles": {
    "perimeter": {
      "ambientRoot": 43,
      "ambientGain": 0.045,
      "ambientDetune": 7,
      "ambientBrightness": 480
    }
  }
}
```

`normalizeAudioConfig()` ограничивает опасные диапазоны и дополняет частичный JSON defaults. Поэтому дизайнер может передавать как полный preset, так и небольшой patch.

## Audio sandbox

Страница: `/audio-sandbox.html`.

Она входит в тот же Vite multi-page build, что и игра, и попадает в `docs/audio-sandbox.html`.

### Можно настраивать

- master и пять buses;
- дыхание;
- heartbeat;
- footsteps;
- radio squelch;
- radio hiss;
- внутренний сигнал О-41;
- dark ambient gain/noise/pulse;
- для каждого уровня: root Hz, gain, detune, brightness, hum/noise gains, random event timing;
- environment event previews;
- несколько ключевых SFX.

### JSON workflow

1. Настроить звук.
2. Нажать `КОПИРОВАТЬ JSON`.
3. Передать текст другому разработчику/дизайнеру.
4. Вставить JSON в поле sandbox.
5. Нажать `ПРИМЕНИТЬ JSON`.
6. Для использования игрой нажать `СОХРАНИТЬ ДЛЯ ИГРЫ`.

Local storage key:

```text
kontur041.audio.v1
```

Игра при старте вызывает `loadAudioConfigFromStorage()`.

## Тело игрока

### Дыхание

Всегда существует, но интенсивность зависит от:

- движения;
- доли HP;
- infection;
- proximity danger.

Это заменяет отдельный HUD stamina/stress meter.

### Сердце

Появляется только при низком здоровье или сильном infection/resonance. В сочетании с почти тихим `Белым Безмолвием` становится особенно заметным.

### Шаги

Профили: `concrete`, `metal`, `organic`, `white`.

Шаг должен прежде всего сообщать **материал пространства**, а не симулировать реалистичную обувь.

## Повествование как звук

- `К.О.Н.Т.У.Р.` → squelch + band-limited hiss;
- `БИОСКАНЕР` → более высокий канал;
- `ЗАПИСЬ` → tape-start + hiss;
- `О-41` / `НЕИЗВЕСТНЫЙ СИГНАЛ` → внутренний низкочастотный resonance без radio-channel;
- `ОПЕРАТИВНИК` → без радиофильтра.

Принцип важен сюжетно: когда игрок начинает слышать О-41 без рации, интерфейс уже не может объяснить источник как внешнюю связь.

## Уровневые профили

| Уровень | Постоянный слой | Случайные события | Функция |
|---|---|---|---|
| Периметр | 50 Гц/вентиляция + низкий drone | металл, реле, капли, лампы, ghost-radio | человеческий объект ещё читается |
| Архив | серверный hum + более холодный drone | relay, tape, printer, server | механическая повторяемость усиливает spatial loop |
| Реактор | давление/турбина + самый тяжёлый low bed | steam, geiger, pressure | звук заменяет зрение в тумане |
| Утроба | органический drone | wet, pulse, whisper, spore hiss | пространство звучит как организм |
| Безмолвие | редкий высокий тон + разреженный low bed | resonance, distant pulse, whisper | отрицательное пространство и собственное тело игрока |

## Позиционные acoustic landmarks

`LevelFactory` возвращает:

```js
context.audio.emitters = [
  { type: 'steam', x: 5.9, z: -3.0 },
  { type: 'turbine', x: -6.0, z: -9.0 }
];
```

`AudioSystem` вычисляет distance gain и stereo pan относительно yaw игрока. Это позволяет в Реакторе ориентироваться на слух.

## Слизь

Контакт с resonance-node имеет отдельную signature: noise-band + два несовпадающих тона через `body`/`ambience`. Hazard-пулы используют `sporeHiss` как предупреждение, но не спамят им каждый frame.

## Тестовые контракты

`test/audio.test.js` проверяет:

- профиль для каждого уровня;
- безопасную работу до AudioContext unlock;
- line-duration события NarrativeDirector;
- нормализацию JSON preset;
- round-trip через localStorage-compatible storage;
- hot apply config до unlock.

`test/slime.test.js` отдельно проверяет audio-связанное campaign state через semantic slime events.
