# КОНТУР-041 — Implementation map

Версия: **0.6.0**

## Composition root

`src/app/Game.js` связывает независимые системы через `EventBus` и передаёт минимальный runtime state в renderer/audio/HUD.

```text
Input
  ↓
Game
├─ Player / WeaponSystem / EnemyDirector
├─ ProgressionSystem / ObjectiveSystem / NarrativeDirector
├─ SlimeSystem / InfectionSystem / Inventory / Crafting
├─ LevelFactory / CollisionWorld / TriggerSystem / InteractionSystem
├─ AudioSystem
├─ RetroRenderer
└─ HUD
```

## Основные границы

- `ProgressionSystem` — campaign flags/counters + transition contracts;
- `SlimeSystem` — campaign resonance, environmental slime volumes, ending availability;
- `LevelFactory` — геометрия, interaction/trigger placement, optional narrative routes;
- `AudioSystem` — единственный владелец WebAudio nodes;
- `audioConfig.js` — сериализуемый JSON contract настройки звука;
- `RetroRenderer` — low-res/post effects;
- `HUD` — только постоянно полезные показатели, полный management UI живёт в pause overlay.

## Audio sandbox

`audio-sandbox.html` — второй Vite entry point.

Он импортирует тот же `AudioSystem`, что и игра. Это принципиально: sandbox не эмулирует звук отдельным кодом.

Поток настройки:

```text
UI controls
   ↓
normalized AudioConfig
   ↓
AudioSystem.setConfig()
   ├─ live preview
   ├─ JSON copy/paste
   └─ localStorage
          ↓
        Game startup
```

## SlimeSystem

Данные environmental-zone не являются Three.js mesh state:

```js
{
  id,
  x, z,
  radius,
  kind: 'hazard' | 'symbiotic',
  infectionPerSecond,
  calmPerSecond,
  slowSeconds,
  visualStrength
}
```

Это позволяет тестировать механику без WebGL.

`attune(id)` записывает campaign flag и counter через `ProgressionSystem`, поэтому optional-контакт переживает смену уровня.

## UI simplification

Из always-on HUD убраны элементы без решения:

- статический dossier-портрет;
- фиктивный `% scanner power`;
- всегда видимый backpack;
- неактивные weapon placeholders сверх двух belt slots.

Остались:

- 2 активных оружия;
- HP;
- infection;
- spores;
- contour;
- radar/compass;
- current objective (`ФОКУС`);
- resonance count.

## RetroRenderer v0.6

Pipeline:

```text
Three scene
  ↓
low-resolution WebGLRenderTarget
  ↓
nearest-neighbour upscale
  ↓
CRT curvature
  ↓
world distortions (infection / wail / hive / slime)
  ↓
scanlines + temporal noise
  ↓
vignette / ending grade
  ↓
screen
```

Destructive full-frame 16-colour quantization не используется. Палитра контролируется на texture/material authoring stage.

## Неевклидова геометрия

Прототип меняет топологию пути, а не vertex-space:

- archive loop teleports в визуально схожую секцию;
- reactor stair возвращает в собственный маршрут;
- pocket room физически вынесена за основную карту;
- false-memory room переключает пространство через teleport;
- final arena меняет расположение визуальных ориентиров по boss-phase.

Следующий production-шаг — формализовать это в `RoomGraph + PortalTransform`.

## Физический контракт переходов

Каждый межуровневый переход:

```text
progression prerequisite
→ interaction
→ door collider disabled
→ player physically crosses gate
→ cross-trigger
→ transition assertion
→ next level
```

Логическое разрешение и геометрическая проходимость тестируются отдельно.

## GitHub Pages

`vite.config.js` использует multi-page Rollup input:

```text
index.html         → game
audio-sandbox.html → audioSandbox
```

`build.outDir = 'docs'`, `base = './'`.

Исходная Markdown-документация хранится только в `design/`.
