# КОНТУР-041 — Regression / traversal tests

Версия: **0.6.0**

## Команды

```bash
npm test
npm run test:logic
npm run test:levels
```

## Logic suite

`test:logic` сейчас проверяет 18 контрактов в четырёх файлах:

- `systems.test.js` — inventory/crafting/ammo/infection;
- `progression.test.js` — campaign transition contracts и counters;
- `audio.test.js` — profiles, pre-unlock behaviour, narrative timing, JSON config normalization/storage/hot-apply;
- `slime.test.js` — attunement, hazard/symbiotic effects, ending graph.

## Traversal suite

`test:levels` загружает настоящий:

- `LevelFactory`;
- `CollisionWorld`;
- `InteractionSystem`;
- `TriggerSystem`;
- `ProgressionSystem`;
- `SlimeSystem`.

Three.js заменяется только headless stub. Координаты/коллизии/interaction radii остаются runtime-данными.

A* probe: grid `0.25`, радиус игрока `0.31`.

## Проверяемые маршруты

### Периметр

`spawn → shiftPass → airlock open → physical cross → archive`.

### Архив

`spawn → signalTerminal → loop ×3 → sideDoor → archiveData → reactor gate → reactor`.

Тест без slime-conduit намеренно использует worst-case маршрут в 3 цикла. Optional resonance может сократить реальный runtime-маршрут до 2.

### Реактор

`spawn → selfStair ×2 → pocket room → Irritant Core → pocketExit → gate → womb`.

### Утроба

Обязательный маршрут:

`spawn → memoryPortal → dossier → memoryExit → organic gate → silence`.

Optional slime pilgrimage не является prerequisite и поэтому не может softlock основной маршрут.

### Белое Безмолвие

Три отдельных ending-state теста проверяют:

- `attunement=2` → burn + merge;
- `attunement=3 + evidence` → broadcast;
- `attunement=0 + evidence` → sever.

Все активные ending interactions должны быть физически достижимы.

## Environment invariants

- каждый уровень содержит минимум одну slime gameplay-zone;
- каждый уровень содержит минимум четыре acoustic landmarks;
- decorative environment не добавляет незапланированные route blockers.

## Правило для новой механики

Нельзя считать feature законченной, если тест проверяет только boolean state. Для пространственной механики нужен как минимум один assertion про физическую достижимость/недостижимость.
