const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  const isOpening = !menu.classList.contains('menu-visible');

  menu.classList.toggle('menu-visible');
  menuBtn.classList.toggle('menu-btn-close');
  overlay.classList.toggle('overlay-hide');

  menu.inert = !isOpening;
  menuBtn.setAttribute('aria-expanded', isOpening);
});
