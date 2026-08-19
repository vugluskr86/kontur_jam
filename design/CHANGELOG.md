# КОНТУР-041 — Changelog

## 0.6.0

### Repository / deployment

- пользовательский архив принят за новую базу и объединён с дальнейшими изменениями;
- Markdown-документация окончательно перенесена в `design/`;
- `docs/` закреплён как Vite output для GitHub Pages;
- `vite.config.js` стал multi-page: игра + audio sandbox;
- добавлен `public/.nojekyll`;
- package/lock version синхронизированы на `0.6.0`.

### Audio

- добавлен сериализуемый `audioConfig.js`;
- добавлена `darkAmbient` bus;
- реализован непрерывный трёхголосный drone + LFO + filtered noise;
- level profiles получили root/detune/brightness/ambient gain;
- `AudioSystem.setConfig()` поддерживает live hot apply;
- добавлен `audio-sandbox.html` с previews и JSON copy/paste workflow;
- игра загружает сохранённый preset из `localStorage`.

### Rendering / UI

- `RetroRenderer` получил CRT curvature, grain, vignette и новые story-driven distortions;
- слизь передаёт в renderer отдельные `intensity`/`hazard` параметры;
- ending grades разделены для burn/merge/broadcast/sever;
- always-on HUD сокращён до decision-relevant telemetry;
- полный backpack/crafting/weapons остаётся только в pause UI;
- на стартовый экран добавлена ссылка в Audio Sandbox.

### Slime / narrative

- введён `SlimeSystem`;
- hazard и symbiotic pools получили противоположные игровые эффекты;
- resonance nodes влияют на campaign state;
- Архив: контакт с О-41 сокращает spatial loop;
- Реактор: resonance node подавляет residual wail effect;
- Утроба: последовательный optional pilgrimage меняет текущий gameplay `ФОКУС`;
- финал расширен до четырёх context-dependent концовок: burn / merge / broadcast / sever.

### Tests

- добавлены `test/slime.test.js`;
- Audio JSON config покрыт normalization/storage/hot-apply tests;
- traversal suite проверяет три ending-state сценария;
- добавлен regression test порядка slime pilgrimage → ObjectiveSystem;
- итог: 28/28 PASS.
