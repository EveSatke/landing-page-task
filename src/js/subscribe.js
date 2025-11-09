const perks = [
  {
    icon: '/landing-page-task/icons/cycle.svg',
    alt: 'delivery icon',
    text: 'delivery every 30 days',
  },
  {
    icon: '/landing-page-task/icons/percentage.svg',
    alt: 'value icon',
    text: 'best value per box',
  },
  {
    icon: '/landing-page-task/icons/close.svg',
    alt: 'cancel icon',
    text: 'no commitment, cancel anytime',
  },
];

export function initSubscribe() {
  const list = document.querySelector('.subscribe__list');
  if (!list) return;

  list.innerHTML = perks
    .map(
      ({ icon, alt, text }) => `
          <li class="subscribe__item">
            <img class="subscribe__icon" src="${icon}" alt="${alt}" role="presentation" />
            <span class="subscribe__text">${text}</span>
          </li>`
    )
    .join('');
}
