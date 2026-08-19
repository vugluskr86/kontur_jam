# КОНТУР-041 — GitHub Pages deployment

Версия: **0.6.0**

## Роли директорий

- `design/` — исходная проектная документация;
- `docs/` — **генерируемый deployment output**;
- `src/` — исходники приложения.

Не переносить Markdown design-документы обратно в `docs/`.

## Build

```bash
npm ci
npm test
npm run build:pages
```

Vite очищает `docs/` и создаёт туда production assets.

Multi-page outputs:

```text
docs/index.html          # игра
docs/audio-sandbox.html  # AudioSystem sandbox
docs/assets/*            # hashed JS/CSS
docs/.nojekyll           # copied from public/
```

## Почему `base: './'`

Project Pages часто размещается не в корне домена, а в `/<repository>/`. Relative asset base не привязывает build к конкретному имени репозитория.

## Рекомендуемый pre-deploy gate

Перед публикацией:

```bash
npm test && npm run build:pages
```

Проверить:

1. игра открывается из `docs/index.html` через локальный static server;
2. `docs/audio-sandbox.html` открывается отдельно;
3. ссылка `AUDIO SANDBOX` из стартового экрана работает;
4. JSON preset сохраняется и подхватывается игрой после reload;
5. `docs/` не содержит исходной Markdown-документации.

## GitHub Pages source

Если Pages настроен на branch-based deployment, выбрать нужную branch и `/docs` как directory. Если используется GitHub Actions deployment, build artifact всё равно следует брать именно из `docs/`.
