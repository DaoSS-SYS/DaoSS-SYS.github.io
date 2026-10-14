# daoss-sys.github.io

Личная страница-резюме Олега Журавлева (Junior .NET Backend Developer).

Статический сайт без сборки: `index.html`, `assets/style.css`, `assets/script.js`.
Светлая и тёмная темы (по системным настройкам, с ручным переключением), адаптивная вёрстка, стили для печати.

## Локальный просмотр

```bash
python -m http.server 8765
```

После запуска откройте http://127.0.0.1:8765/

## Структура

```
index.html            страница
assets/style.css      стили
assets/script.js      переключатель темы
assets/photo.jpg      фото
assets/og.png         картинка для превью ссылки в соцсетях и мессенджерах
assets/favicon.svg    иконка
assets/Oleg_Zhuravlev_CV.pdf   резюме для скачивания
```

## Публикация

Репозиторий называется `DaoSS-SYS.github.io`: GitHub Pages отдаёт его на https://daoss-sys.github.io/
(Settings → Pages → Source: «Deploy from a branch», ветка `main`, папка `/ (root)`).
