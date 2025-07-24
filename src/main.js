import './style.css'
import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from 'flatpickr';

function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  // Set first tab as active by default
  if (tabButtons.length > 0) {
    tabButtons[0].classList.remove('bg-white');
    tabButtons[0].classList.add('bg-[#f4f4f4]');
    tabButtons[0].classList.remove('border-[#e5e5e5]');
    tabButtons[0].classList.add('border-[#f4f4f4]');
  }

  // Add click listeners for tab switching
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.dataset.tab;

      // Deactivate all tab buttons
      tabButtons.forEach(btn => {
        btn.classList.remove('bg-[#f4f4f4]');
        btn.classList.add('bg-white');
        btn.classList.remove('border-[#f4f4f4]');
        btn.classList.add('border-[#e5e5e5]');
      });

      // Hide all tab contents
      tabContents.forEach(content => {
        content.classList.add('hidden');
      });

      // Activate the clicked tab button
      button.classList.remove('bg-white');
      button.classList.add('bg-[#f4f4f4]');
      button.classList.remove('border-[#e5e5e5]');
      button.classList.add('border-[#f4f4f4]');

      // Show the selected tab content
      const activeTab = document.getElementById(tabId);
      if (activeTab) {
        activeTab.classList.remove('hidden');
      }
    });
  });
}

function initMobileMenu() {
  const burgerBtn = document.getElementById('burger-btn-main');
  const mobileMenu = document.getElementById('mobile-menu-main');
  const burgerIcon = document.getElementById('burger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (burgerBtn && mobileMenu && burgerIcon && closeIcon) {
    burgerBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
      burgerIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  }
}

function initMobileSearch() {
  const mobileSearchButton = document.getElementById('mobile-search-button');
  const mobileSearchOverlay = document.getElementById('mobile-search-overlay');

  if (mobileSearchButton && mobileSearchOverlay) {
    mobileSearchButton.addEventListener('click', function () {
      mobileSearchOverlay.classList.toggle('hidden');
      if (!mobileSearchOverlay.classList.contains('hidden')) {
        document.getElementById('mobile-search-input').focus();
      }
    });
  }
}

function initDropdowns() {
  document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown]');
      currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initTabs();
  initMobileMenu();
  initMobileSearch();
  initDropdowns();
});
