import enduranceIcon from '../assets/icons/endurance.svg?raw';
import energyIcon from '../assets/icons/bolt.svg?raw';
import thumbsUpIcon from '../assets/icons/thumbs-up.svg?raw';
import immuneIcon from '../assets/icons/immune-shield.svg?raw';
import habitIcon from '../assets/icons/habit.svg?raw';
import metabolismIcon from '../assets/icons/fire.svg?raw';

const features = [
  {
    icon: enduranceIcon,
    text: 'Enhance <b>endurance, performance</b>, and exercise <b>recovery</b>',
  },
  {
    icon: energyIcon,
    text: 'Enjoy jitter-free <b>energy</b> to tackle your busy schedule',
  },
  {
    icon: thumbsUpIcon,
    text: 'Tastes amazing!</b> No bitterness, gritty, or clumpy texture',
  },
  {
    icon: immuneIcon,
    text: 'Strengthen your <b>immune health</b> to stay on your game',
  },
  { icon: habitIcon, text: '<b>30 sec habit.</b> Mixes in any beverage fast and easy' },
  { icon: metabolismIcon, text: 'Recharged <b>metabolism</b> to stay in peak shape' },
];

export function initFeatures() {
  const list = document.querySelector('.features__list');
  if (!list) return;

  list.innerHTML = features
    .map(
      ({ icon, text }) => `
          <li class="features__item">
            ${icon}
            <p class="features__text">${text}</p>
          </li>`
    )
    .join('');
}
