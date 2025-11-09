const navLinks = [
  { label: 'shop', href: '#' },
  { label: 'mission', href: '#' },
];

function renderNav(listSelector, { itemClass, linkClass }) {
  const list = document.querySelector(listSelector);
  if (!list) return;

  list.innerHTML = navLinks
    .map(
      ({ label, href }) => `
          <li class="${itemClass}">
            <a class="${linkClass}" href="${href}">${label}</a>
          </li>`
    )
    .join('');
}

export function initNavigation() {
  renderNav('.header__list', {
    itemClass: 'header__item',
    linkClass: 'header__link',
  });
  renderNav('.header__mobile-list', {
    itemClass: 'header__mobile-item',
    linkClass: 'header__link',
  });
}
