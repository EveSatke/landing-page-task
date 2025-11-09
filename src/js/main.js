import '../styles/main.scss';
import './slider.js';
import { initMobileMenu } from './menu.js';
import { initFaq } from './faq.js';
import { initBenefits } from './benefits.js';
import { initNavigation } from './navigation.js';
import { initSubscribe } from './subscribe.js';
import { initFeatures } from './features.js';
import { initProcess } from './process.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initMobileMenu();
  initBenefits();
  initFeatures();
  initSubscribe();
  initProcess();
  initFaq();

  const PRODUCT_NAME = '[product name]';
  const selectors = [
    '.hero__title',
    '.hero__button',
    '.slider__title-highlight',
    '.faq__question span',
  ];

  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = node.textContent.replace('[product name]', PRODUCT_NAME);
    });
  });
});
