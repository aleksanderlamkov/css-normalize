# @a1rth/css-normalize

🎯 Современная альтернатива классическому normalize.css — минимум кода, максимум пользы.

Нормализует базовые стили без устаревших хаков. Только то, что действительно нужно.

## Установка

NPM:
```bash
npm install @a1rth/css-normalize
```

Yarn:
```bash
yarn add @a1rth/css-normalize
```

PNPM:
```bash
pnpm add @a1rth/css-normalize
```

## Использование

В CSS/SCSS-файле:
```css
@import '@a1rth/css-normalize';
```

В JavaScript:
```javascript
import '@a1rth/css-normalize'
```

Через CDN:
```html
<!-- Полная версия -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@a1rth/css-normalize/normalize.css" />

<!-- Минифицированная версия -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@a1rth/css-normalize/normalize.min.css" />
```

## Почему стоит использовать?
- ✅ Современный подход без поддержки устаревших браузеров
- ✂️ Минимальный размер — только нужное
- 🎨 Отличная база для кастомной дизайн-системы
- 💻 Подходит для любых проектов — от pet-проектов до продакшена

## Поддержка браузеров
Современные версии всех популярных браузеров (Chrome, Firefox, Safari, Edge).

## Обратная связь
Если нашли баг или хотите предложить улучшение — открывайте issue или присылайте pull request.

GitHub: https://github.com/aleksanderlamkov/css-normalize

## Лицензия
MIT

## История изменений

### 1.2.0

#### Добавлено
- Минифицированная версия `normalize.min.css` для подключения через CDN

#### Изменено
- Переименован `index.css` → `normalize.css`
- Расширена нормализация внешних отступов у `fieldset`
- Обновлено оформление и структура README

#### Удалено
- Удалён тяжёлый селектор `:has(:target)` — повышена производительность

----

**Автор:** [Александр Ламков](https://www.youtube.com/@AleksanderLamkov)