const toggle = document.getElementById('langToggle');
let currentLang = 'en';
toggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'my' : 'en';
  document.documentElement.lang = currentLang === 'en' ? 'en' : 'my';
  document.querySelectorAll('[data-en][data-my]').forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
  toggle.textContent = currentLang === 'en' ? 'မြန်မာ' : 'English';
});
document.getElementById('year').textContent = new Date().getFullYear();
