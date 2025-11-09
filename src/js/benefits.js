import sleepIcon from '/landing-page-task/icons/moon.svg?raw';
import immuneIcon from '/landing-page-task/icons/heart-shield.svg?raw';
import strengthIcon from '/landing-page-task/icons/weight.svg?raw';
import digestionIcon from '/landing-page-task/icons/stomach.svg?raw';

const benefits = [
  {
    icon: sleepIcon,
    text: 'Improves sleep',
  },
  {
    icon: immuneIcon,
    text: 'Boosts immune system',
  },
  {
    icon: strengthIcon,
    text: 'Enhances strength',
  },
  {
    icon: digestionIcon,
    text: 'Improves digestion',
  },
];

export function initBenefits() {
  const list = document.querySelector('.benefits__list');

  if (!list) return;

  list.innerHTML = benefits
    .map(
      ({ icon, text }) => `
    <li class="benefits__item">
    ${icon}
    <p class="benefits__text">${text}</p>
    </li>
    `
    )
    .join('');
}
