import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const sliderElement = document.querySelector('.swiper');

if (sliderElement) {
  new Swiper(sliderElement, {
    modules: [Navigation, Pagination],
    loop: true,
    sliderPerView: 1,
    spaceBetween: 24,
    navigation: {
      nextEl: '.slider__arrow--next',
      prevEl: '.slider__arrow--prev',
    },
    pagination: {
      el: '.slider__pagination',
      clickable: true,
      renderBullet: (index, className) =>
        `<span class="slider__bullet ${className}" aria-label="Go to slide ${index + 1}"></span>`,
    },
  });
}
