import './style.css'

document.addEventListener('click', (e) => {
  // --- Логика для основного мобильного меню ---
  const burgerBtnMain = e.target.closest('#burger-btn-main');
  if (burgerBtnMain) {
    const mobileMenuMain = document.getElementById('mobile-menu-main');
    const burgerIcon = document.getElementById('burger-icon');
    const closeIcon = document.getElementById('close-icon');

    if (mobileMenuMain && burgerIcon && closeIcon) {
      mobileMenuMain.classList.toggle('hidden');
      burgerIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden');
    }
  }

  // Закрытие основного меню по клику вне его
  const mobileMenuMain = document.getElementById('mobile-menu-main');
  if (mobileMenuMain && !mobileMenuMain.classList.contains('hidden')) {
    const burger = e.target.closest('#burger-btn-main');
    // Закрываем, только если клик был не по меню и не по кнопке открытия
    if (!burger && !mobileMenuMain.contains(e.target)) {
      mobileMenuMain.classList.add('hidden');
      document.getElementById('burger-icon').classList.remove('hidden');
      document.getElementById('close-icon').classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }


  // --- Логика для бургер-меню админки (если понадобится) ---
  const burgerBtnAdmin = e.target.closest('#burger-btn');
  if (burgerBtnAdmin) {
    const mobileMenuAdmin = document.getElementById('mobile-menu');
    if (mobileMenuAdmin) {
      mobileMenuAdmin.classList.toggle('hidden');
      // Здесь тоже можно добавить смену иконок по аналогии, если у админки будет свой бургер
    }
  }

  // --- Логика для табов (остается без изменений) ---
  const tabButton = e.target.closest('.tab-button');
  if (tabButton) {
    const tabId = tabButton.dataset.tab;
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
      btn.classList.remove('border-blue-500', 'text-blue-600');
      btn.classList.add('border-transparent', 'text-gray-500');
    });

    tabButton.classList.remove('border-transparent', 'text-gray-500');
    tabButton.classList.add('border-blue-500', 'text-blue-600');

    tabContents.forEach(content => {
      content.classList.add('hidden');
    });

    const activeContent = document.getElementById(tabId);
    if (activeContent) {
      activeContent.classList.remove('hidden');
    }
  }
});
