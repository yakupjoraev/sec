# 🎨 Шаблон для верстки с Vite + Tailwind CSS

Готовая настройка для быстрой верстки с использованием HTML компонентов, Tailwind CSS и минимального JavaScript для интерактивности.

## ✨ Особенности

- 🚀 **Vite** - молниеносная разработка с HMR
- 🎨 **Tailwind CSS v3** - полный набор утилит для стилизации
- 🧩 **HTML компоненты** - переиспользуемые блоки через EJS
- ⚡ **Минимальный JS** - только для интерактивности (бургер, табы)
- 📦 **Готовая сборка** - статические файлы для передачи фронтенду
- 🔧 **Простая настройка** - работает из коробки

## 🚀 Быстрый старт

```bash
# Клонируйте шаблон
git clone <your-template-repo>
cd your-project

# Установите зависимости
npm install

# Запустите dev сервер
npm run dev

# Откройте http://localhost:5173
```

## 📁 Структура проекта

```
your-project/
├── src/
│   ├── main.js        # JavaScript для интерактивности
│   └── style.css      # Tailwind CSS + кастомные стили
├── components/        # HTML компоненты (EJS шаблоны)
│   ├── header.html    # Шапка с адаптивным меню
│   ├── hero.html      # Hero секция с градиентом
│   ├── cards.html     # Карточки услуг с иконками
│   ├── footer.html    # Подвал с контактами
│   └── pricing.html   # Тарифы (пример)
├── index.html         # Главная страница
├── vite.config.js     # Конфигурация Vite + плагины
└── package.json       # Зависимости проекта
```

## 🧩 Работа с компонентами

### Использование существующих компонентов

В `index.html` используйте EJS синтаксис для включения компонентов:

```html
<!doctype html>
<html lang="ru">
<head>
  <title><%- title %></title>
</head>
<body>
  <!-- Включение компонентов -->
  <%- include('./components/header.html') %>
  <%- include('./components/hero.html') %>
  <%- include('./components/cards.html') %>
  <%- include('./components/footer.html') %>
</body>
</html>
```

### Создание нового компонента

1. **Создайте файл** в папке `components/`:

   ```bash
   touch components/your-component.html
   ```

2. **Добавьте HTML разметку** с Tailwind классами:

   ```html
   <!-- components/your-component.html -->
   <section class="py-16 bg-white">
     <div class="container mx-auto px-4">
       <h2 class="text-3xl font-bold mb-6">Заголовок</h2>
       <p class="text-gray-600">Контент компонента</p>
     </div>
   </section>
   ```

3. **Включите в основной HTML**:
   ```html
   <%- include('./components/your-component.html') %>
   ```

### Передача данных в компоненты

Настройте данные в `vite.config.js`:

```js
createHtmlPlugin({
  inject: {
    data: {
      title: 'Название сайта',
      siteName: 'Мой Проект',
      description: 'Описание проекта'
    },
  },
})
```

Используйте в HTML:

```html
<title><%- title %></title>
<h1><%- siteName %></h1>
```

## 🎨 Стилизация

### Готовые компоненты

В `src/style.css` есть кастомные классы:

```css
.btn-primary    /* Основная кнопка */
.card          /* Карточка с тенью и отступами */
```

### Добавление новых стилей

```css
@layer components {
  .btn-secondary {
    @apply bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors;
  }

  .card-hover {
    @apply card hover:shadow-lg transition-shadow duration-300;
  }
}
```

### Использование Tailwind

```html
<!-- Адаптивная сетка -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- Кнопки -->
<button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
  Кнопка
</button>

<!-- Формы -->
<input class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
```

## ⚡ JavaScript интерактивность

### Готовые функции

- **Бургер-меню** - автоматически работает для `#burger-btn` и `#mobile-menu`
- **Табы** - для элементов с классом `.tab-button` и `data-tab`

### Добавление своей логики

```javascript
// src/main.js

function myCustomFunction() {
  // Ваша логика
  console.log('Кастомная функция')
}

// Добавьте в инициализацию
document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu()
  initTabs()
  myCustomFunction() // ← Добавьте здесь
})
```

### Примеры интерактивности

```javascript
// Модальные окна
function openModal(modalId) {
  document.getElementById(modalId).classList.remove('hidden')
}

// Слайдеры
function nextSlide() {
  // Логика слайдера
}

// Аккордеоны
function toggleAccordion(element) {
  element.nextElementSibling.classList.toggle('hidden')
}
```

## 📦 Сборка проекта

```bash
# Разработка
npm run dev              # Запуск dev сервера

# Продакшн
npm run build           # Создание папки dist/
npm run preview         # Предварительный просмотр сборки
```

### Передача фронтенду

После `npm run build` в папке `dist/` будут готовые файлы:

- `index.html` - со всеми включенными компонентами
- `assets/` - оптимизированные CSS и JS файлы
- Статические файлы (изображения, иконки)

## 🎯 Примеры использования

### Лендинг

```html
<%- include('./components/header.html') %>
<%- include('./components/hero.html') %>
<%- include('./components/features.html') %>
<%- include('./components/pricing.html') %>
<%- include('./components/footer.html') %>
```

### Корпоративный сайт

```html
<%- include('./components/header.html') %>
<%- include('./components/breadcrumbs.html') %>
<%- include('./components/about.html') %>
<%- include('./components/team.html') %>
<%- include('./components/contacts.html') %>
<%- include('./components/footer.html') %>
```

### Интернет-магазин

```html
<%- include('./components/header.html') %>
<%- include('./components/catalog.html') %>
<%- include('./components/products.html') %>
<%- include('./components/cart.html') %>
<%- include('./components/footer.html') %>
```

## 🛠 Настройка под проект

### Изменение темы

1. **Обновите `tailwind.config.js`**:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color'
      }
    }
  }
}
```

2. **Обновите кастомные классы** в `src/style.css`

### Добавление шрифтов

```html
<!-- В components/header.html или index.html -->
<link href="https://fonts.googleapis.com/css2?family=Your+Font" rel="stylesheet">
```

```css
/* В src/style.css */
@layer base {
  body {
    font-family: 'Your Font', sans-serif;
  }
}
```

## 🔧 Полезные команды

```bash
# Добавить новые пакеты
npm install package-name

# Обновить зависимости
npm update

# Проверить устаревшие пакеты
npm outdated

# Очистить node_modules
rm -rf node_modules package-lock.json && npm install
```

## 💡 Советы и лучшие практики

### Организация кода

- 📁 Держите компоненты в отдельных файлах
- 🎨 Используйте Tailwind для 90% стилей
- ⚡ Добавляйте JS только для интерактивности
- 📱 Всегда делайте адаптивную верстку

### Оптимизация

- 🖼 Сжимайте изображения перед добавлением
- 📦 Используйте `npm run build` для продакшна
- 🚀 Тестируйте на разных устройствах
- ✅ Проверяйте accessibility

### Командная работа

- 📝 Документируйте изменения в компонентах
- 🔄 Используйте Git для версионирования
- 👥 Создавайте переиспользуемые компоненты
- 📋 Ведите список готовых блоков

## 🚀 Готовые блоки

В шаблоне уже есть:

- ✅ Адаптивная шапка с бургер-меню
- ✅ Hero секция с призывом к действию
- ✅ Карточки с иконками и описанием
- ✅ Тарифные планы
- ✅ Подвал с контактами
- ✅ Формы обратной связи
- ✅ Табы и навигация

## 📞 Поддержка

При возникновении проблем:

1. Проверьте структуру файлов
2. Убедитесь что все зависимости установлены
3. Перезапустите dev сервер
4. Проверьте консоль браузера на ошибки

---

**Удачной верстки!** 🎨✨

_Этот шаблон создан для быстрого старта проектов верстки. Адаптируйте под свои нужды!_
