# КОНТУР-041 — Последний regression run

Версия: **0.6.0**

Команда:

```bash
npm test
```

Результат:

```text
logic/system/audio/slime tests    18 / 18 PASS
level traversal/environment       10 / 10 PASS
----------------------------------------------
TOTAL                             28 / 28 PASS
```

Дополнительно изменённые `.js/.mjs` файлы проверены через `node --check`.

## Новые regression-проверки 0.6

Audio:

- JSON config нормализуется;
- preset round-trip работает через localStorage-compatible interface;
- `AudioSystem.setConfig()` безопасен до browser unlock;
- все уровневые profiles сохраняют event/step contracts.

Slime:

- один resonance-node не может увеличить attunement повторно;
- hazard slime заражает и замедляет;
- symbiotic slime уменьшает infection;
- ending availability зависит от сочетания resonance/evidence.

Levels:

- slime gameplay state присутствует на всех 5 уровнях;
- четыре финальных маршрута проверяются через несколько campaign-state сценариев;
- старые переходы Периметр → Архив → Реактор → Утроба → Белое Безмолвие остаются проходимыми.

## Build check

В текущей sandbox-среде `node_modules` не предоставлен, а установка npm dependencies недоступна, поэтому Vite production build здесь не выдаётся за выполненный. Build contract настроен на `docs/`; после `npm ci` локально/в CI нужно выполнить:

```bash
npm run build:pages
```
