import '../styles/main.scss';
import './slider.js';
import { initMobileMenu } from './menu.js';
import { initFaq } from './faq.js';
import { initBenefits } from './benefits.js';

document.addEventListener('DOMContentLoaded', () => {
  const PRODUCT_NAME = '[product name]';
  const selectors = [
    '.hero__title',
    '.hero__button',
    '.slider__title-highlight',
    '.faq__question span',
  ];

  initMobileMenu();
  initFaq();
  initBenefits();

  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = node.textContent.replace('[product name]', PRODUCT_NAME);
    });
  });
});
