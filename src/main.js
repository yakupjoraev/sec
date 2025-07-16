import './style.css'

// Бургер-меню
function initBurgerMenu() {
  const burgerBtn = document.getElementById('burger-btn')
  const mobileMenu = document.getElementById('mobile-menu')

  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden')
    })

    // Закрытие меню при клике вне его
    document.addEventListener('click', (e) => {
      if (!burgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden')
      }
    })
  }
}

// Табы
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-button')
  const tabContents = document.querySelectorAll('.tab-content')

  tabButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const tabId = e.target.dataset.tab

      // Убираем активные классы у всех кнопок
      tabButtons.forEach(btn => {
        btn.classList.remove('border-blue-500', 'text-blue-600')
        btn.classList.add('border-transparent', 'text-gray-500')
      })

      // Добавляем активные классы текущей кнопке
      e.target.classList.remove('border-transparent', 'text-gray-500')
      e.target.classList.add('border-blue-500', 'text-blue-600')

      // Скрываем все контенты
      tabContents.forEach(content => {
        content.classList.add('hidden')
      })

      // Показываем нужный контент
      const activeContent = document.getElementById(tabId)
      if (activeContent) {
        activeContent.classList.remove('hidden')
      }
    })
  })
}

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu()
  initTabs()
})
