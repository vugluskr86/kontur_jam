# КОНТУР-041 — FPS prototype v0.6.0

Pixelart 3D retro FPS horror на Three.js + Vite. Ветка `0.6.x` объединяет пользовательские изменения проекта с аудио-sandbox, новым dark-ambient слоем, упрощённым HUD, усиленным retro/CRT render pipeline и сюжетно-геймплейной системой О-41/слизи.

## Важная структура репозитория

```text
/
├── design/             # исходная документация проекта
├── docs/               # ТОЛЬКО результат сборки для GitHub Pages
├── public/.nojekyll    # попадает в docs/ при Vite build
├── src/
├── test/
├── index.html          # игра
└── audio-sandbox.html  # настройка AudioSystem
```

`docs/` больше не используется для Markdown-документации. Все проектные документы находятся в `design/`.

## Запуск

```bash
npm ci
npm run dev
```

Игра: адрес Vite из терминала.

Audio sandbox:

```text
/audio-sandbox.html
```

или ссылка `AUDIO SANDBOX` на стартовом экране игры.

## GitHub Pages

Vite собирает сразу две страницы — игру и audio sandbox — непосредственно в `docs/`:

```bash
npm run build:pages
```

Конфигурация использует `base: './'`, поэтому build пригоден для project pages вида `https://<user>.github.io/<repo>/`.

Подробно: [`design/DEPLOYMENT.md`](design/DEPLOYMENT.md).

## Тесты

```bash
npm test
npm run test:logic
npm run test:levels
```

Текущий regression suite: **28/28 PASS** — 18 logic/system/audio/slime tests и 10 traversal/environment tests.

`test:levels` запускает настоящий `LevelFactory`, `CollisionWorld`, `InteractionSystem` и `TriggerSystem` с headless Three stub и A* probe по реальным AABB уровня.

## Управление

- `WASD` — движение;
- мышь — обзор;
- ЛКМ — огонь;
- `E` — взаимодействие / контакт с резонансным узлом;
- `1` / `2` — активный слот оружейного пояса;
- `I` — инвентарь / крафт / назначение оружия;
- `H` — ингалятор;
- `Q` — мицелиевый щит;
- `Space` — пропустить текущую реплику;
- `M` — mute/unmute;
- `R` — перезапуск после смерти.

## AudioSystem v0.6

Звук процедурный на WebAudio API и разделён на semantic buses:

- `ambience` — окружение и acoustic landmarks;
- `darkAmbient` — постоянный мрачный трёхголосный drone;
- `body` — дыхание, сердце и телесный резонанс;
- `radio` — squelch/hiss, магнитная лента, служебные сигналы;
- `sfx` — оружие, двери, враги, слизь и мир.

### Audio sandbox

`audio-sandbox.html` позволяет в реальном времени настроить:

- master и все bus gains;
- дыхание, сердцебиение, шаги;
- radio squelch/hiss и внутренний сигнал О-41;
- громкость/пульсацию/noise мрачного ambient-bed;
- root frequency, detune, brightness и event cadence отдельно для каждого уровня;
- отдельные procedural SFX и environment events.

Preset можно **скопировать как JSON**, вставить на другой машине и применить. `СОХРАНИТЬ ДЛЯ ИГРЫ` пишет тот же нормализованный JSON в `localStorage` (`kontur041.audio.v1`), после чего игра подхватывает его при старте.

Документ: [`design/AUDIO_ENVIRONMENT.md`](design/AUDIO_ENVIRONMENT.md).

## Визуальный стиль v0.6

UI упрощён: постоянный интерфейс оставляет только информацию, которая реально влияет на решение игрока:

- два активных weapon slots;
- Контур;
- здоровье;
- споры;
- радар/компас;
- текущий `ФОКУС`;
- заражение;
- резонанс О-41.

Рюкзак, крафт и полный список оружия показываются только в pause inventory. Убраны статический dossier-портрет, фиктивная мощность сканера и постоянно видимые пустые слоты.

`RetroRenderer` добавляет поверх low-resolution nearest-neighbour изображения:

- лёгкую CRT/barrel curvature;
- scanlines и subscan;
- temporal grain;
- vignette;
- chromatic displacement от заражения;
- distortion от Вопленника/Улья;
- отдельный slime edge/tint эффект;
- уникальное финальное grade-состояние для каждой концовки.

Ограниченная палитра остаётся в самих материалах/Canvas-текстурах, поэтому постобработка не превращает геометрию в чёрный силуэт.

## Слизь / О-41 — gameplay layer

Слизь больше не является только декорацией/ресурсом:

1. **Hazard pools** заражают и замедляют.
2. **Symbiotic pools** снижают заражение и становятся безопасными акустическими/визуальными островками.
3. **Resonance nodes** дают необязательный прямой контакт с О-41 и увеличивают campaign-параметр `slimeAttunement`.
4. Контакт может менять навигационное правило: в Архиве резонанс сокращает неевклидов цикл с трёх проходов до двух.
5. На Реакторе узел О-41 снимает акустический след Вопленника.
6. В Утробе три узла образуют необязательный «путь по мокрому следу»: следующий фрагмент становится текущим `ФОКУСОМ`, а игрок сознательно выбирает — продолжать приказ штаба или идти на голос.
7. Собранные фрагменты влияют на доступные финальные решения.

Подробно: [`design/SLIME_NARRATIVE.md`](design/SLIME_NARRATIVE.md).

## Концовки

После коллективного разума финальная арена не показывает обычное dialogue-menu — доступные решения материализуются как реальные объекты пространства.

- **Сжечь** — доступно всегда; выполнить приказ К.О.Н.Т.У.Р.
- **Слиться** — требуется резонанс с несколькими узлами О-41.
- **Передать 167.05** — требуется глубокий резонанс + архивные данные + личное дело; предупреждение передаётся без полного слияния.
- **Разорвать резонанс** — требуется доказательство заговора, но низкий уровень резонанса; Скальпель отказывается и от зачистки, и от сети.

Это не система «хорошая/плохая концовка»: игрок сам формирует доступные варианты действия тем, насколько далеко он позволял О-41 вести себя по дороге.

## Документация

- [`design/IMPLEMENTATION.md`](design/IMPLEMENTATION.md) — архитектура;
- [`design/AUDIO_ENVIRONMENT.md`](design/AUDIO_ENVIRONMENT.md) — звук и audio sandbox;
- [`design/GAMEPLAY_NARRATIVE.md`](design/GAMEPLAY_NARRATIVE.md) — narrative → gameplay focus;
- [`design/SLIME_NARRATIVE.md`](design/SLIME_NARRATIVE.md) — слизь, «зов», развилки и концовки;
- [`design/TESTING.md`](design/TESTING.md) — regression contracts;
- [`design/TEST_RESULTS.md`](design/TEST_RESULTS.md) — последний прогон;
- [`design/DEPLOYMENT.md`](design/DEPLOYMENT.md) — `docs/` и GitHub Pages.
