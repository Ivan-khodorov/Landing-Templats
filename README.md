## Environment (.env)

Vite читает только переменные с префиксом **VITE_**:
- \VITE_BASE_URL\ — базовый префикс приложения (обычно '/').
- \VITE_API_BASE\ — базовый URL API.
- \VITE_GA_ID\, \VITE_GTM_ID\ — идентификаторы аналитики.

Скопируйте \.env.example\ → \.env\ и установите значения.

## Алиасы

- \@/*\ → \src/*\
- \@app/*\ → \src/app/*\
- \@components/*\ → \src/app/components/*\
- \@pages/*\ → \src/app/pages/*\

## SVG как React-компоненты

Подключен плагин \ite-plugin-svgr\.  
Можно писать: \import { ReactComponent as Logo } from '@/assets/icons/logo.svg'\

## Статические файлы (public/)

- \public/robots.txt\ — директивы для поисковиков.
- \public/manifest.webmanifest\ — PWA-манифест.
- \public/sitemap.xml\ — карта сайта (замените домен на боевой).
- \public/favicon.ico\, \public/icons/*\ — иконки (заменить реальными).

## Скрипты

- \
npm run dev\ — разработка
- \
npm run build\ — сборка
- \
npm run preview\ — предпросмотр билда

## Деплой (Docker, Nginx)

Соберите образ и запустите контейнер. \/usr/share/nginx/html\ обслуживает \dist\.  
Для SPA fallback добавлен \	ry_files \ /index.html;\.

