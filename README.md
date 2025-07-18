# Jekyll-проект сайта конференции

Этот проект — статический сайт, сгенерированный с использованием [Jekyll](https://jekyllrb.com/). Он используется для презентации информации о мероприятии: программа, спикеры, партнёры, место проведения и пр.

## 📁 Структура проекта

```

├── _config.yml          # Основной конфигурационный файл Jekyll
├── .editorconfig        # Конфиг текстового редактора
├── .gitignore           # Конфиг игнора гит
├── _data/               # YAML-файлы с данными (спикеры, партнёры и пр.)
├── _includes/           # Повторно используемые шаблоны (header, footer, блоки)
├── _layouts/            # Шаблоны страниц
├── assets/              # CSS
├── font/                # Шрифт
├── images/              # изображения
├── media/               # ВидеоФон, цифры статистики, лого
├── scripts/             # JS
├── index.html           # Главная страница
├── 404.html             # Заглушка при 404

````

## 🚀 Как запустить локально

1. Установите зависимости Ruby и Bundler:

   ```bash
   gem install bundler
````

2. Установите зависимости:

   ```bash
   bundle install
   ```

3. Запустите сайт:

   ```bash
   bundle exec jekyll serve
   ```

4. Перейдите по адресу: [http://localhost:4000](http://localhost:4000)

## 🛠️ Редактирование содержимого

* **Спикеры** — в файле `_data/speaker.yml`
* **Партнёры** — в файле `_data/partners.yml`
* **Программа** — в файле `_includes/program.html`
* **Контакты** — в файле `_includes/program.html`
* **Тексты на страницах** — ищите в `_includes/` в соответствующем блоке

## 📦 Сборка и деплой

Для генерации production-версии:

```bash
bundle exec jekyll build
```

Файлы появятся в папке `_site/`. Их можно заливать на сервер или GitHub Pages.

## ⚠️ Особенности

* Используются пользовательские блоки Swiper.js — не забудьте подключить CSS и JS в `scripts.js` и `main.scss`
* Карта Yandex (если используется) — JavaScript загружается в `scripts/maps.js`, не забудьте о CORS и ограничениях API

## 🧹 Очистка кеша

Если нужно пересобрать сайт с нуля:

```bash
bundle exec jekyll clean
bundle exec jekyll serve
```

