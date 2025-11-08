import '../styles/main.scss';
import './slider.js';

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.header__toggle');
  const menu = document.getElementById('mobile-nav');
  const close = document.querySelector('.header__mobile-close');
  const menuLinks = document.querySelectorAll('.header__mobile-item');

  if (!toggle || !menu) return;

  const openMenu = () => {
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
  };

  const closeMenu = () => {
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  close?.addEventListener('click', closeMenu);
  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
});
