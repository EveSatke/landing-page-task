import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    title: 'Metabolism Boosting',
    description: [
      'These powerful superfoods ignite your metabolism and reduce bloating. They improve digestion and deliver the energy you need to get things done.',
      'Main Organic Ingredients:',
    ],
    ingredients: [
      { image: '/landing-page-task/images/acai-berry.png', name: 'organic acai berry' },
      { image: '/landing-page-task/images/acacia-gum.png', name: 'organic acacia gum' },
      {
        image: '/landing-page-task/images/cinnamon-bark.png',
        name: 'organic ceylon cinnamon bark',
      },
      { image: '/landing-page-task/images/green-tea.png', name: 'organic green tea' },
    ],
  },
  {
    title: 'Calm Focus Formula',
    description: [
      'Crafted for clear-headed productivity. Adaptogens balance cortisol while nootropics keep your thoughts sharp without the caffeine jitters.',
      'Main Organic Ingredients:',
    ],
    ingredients: [
      { image: '/landing-page-task/images/acacia-gum.png', name: 'organic ashwagandha root' },
      { image: '/landing-page-task/images/acai-berry.png', name: 'organic lion’s mane mushroom' },
      { image: '/landing-page-task/images/acai-berry.png', name: 'organic peppermint leaf' },
      { image: '/landing-page-task/images/acacia-gum.png', name: 'organic lemongrass leaf' },
    ],
  },
  {
    title: 'Nightly Reset Blend',
    description: [
      'Wind down and recharge. This calm-inducing mix eases tension, supports deep sleep, and nourishes overnight recovery.',
      'Main Organic Ingredients:',
    ],
    ingredients: [
      { image: '/landing-page-task/images/acai-berry.png', name: 'organic chamomile flower' },
      { image: '/landing-page-task/images/acai-berry.png', name: 'organic reishi mushroom' },
      { image: '/landing-page-task/images/cinnamon-bark.png', name: 'organic tart cherry' },
    ],
  },
];

function renderTextBlocks(description) {
  return description
    .map((paragraph, index) => {
      const isSubtitle = index === description.length - 1;
      const className = isSubtitle
        ? 'slider__slide-description slider__slide-subtitle'
        : 'slider__slide-description';
      return `<p class="${className}">${paragraph}</p>`;
    })
    .join('');
}

function renderIngredients(ingredients) {
  return ingredients
    .map(({ image, name }) => {
      return `<div class="slider__slide-ingredient">
    <img class="slider__slide-ingredient-image" src="${image}" alt="${name}" />
    <p class="slider__slide-ingredient-name">${name}</p>
    </div>`;
    })
    .join('');
}

function renderSlides(wrapper) {
  const markup = slides
    .map(({ title, description, ingredients }) => {
      return `<div class="slider__slide swiper-slide">
    <div class="slider__slide-text">
    <h3 class="slider__slide-title">${title}</h3>
    ${renderTextBlocks(description)}
    </div>
    <div class="slider__slide-ingredients"> ${renderIngredients(ingredients)}
    </div>
    </div>`;
    })
    .join('');
  wrapper.innerHTML = markup;
}

const sliderElement = document.querySelector('.swiper');

if (sliderElement) {
  const wrapper = sliderElement.querySelector('.swiper-wrapper');

  if (wrapper) {
    renderSlides(wrapper);

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
}
