const steps = [
  {
    title: 'Mission',
    description:
      'Our researchers uncover the best performance and health-boosting superfoods on the planet. We do the homework so you don’t have to. Each superfood is supported by strong clinical studies.',
    icon: '/landing-page-task/icons/mission.svg',
    mobileArrow: '/landing-page-task/icons/arrow-down-right.svg',
    timelineSide: 'left',
    timelineDecor: '/landing-page-task/images/horizontal-decor-left.svg',
  },
  {
    title: 'The problem',
    description:
      'Our advisory panel reviews all scientific research in detail. Each ingredient must pass a rigorous approval process before moving on to production.',
    icon: '/landing-page-task/icons/problem.svg',
    mobileArrow: '/landing-page-task/icons/arrow-down-left.svg',
    timelineSide: 'right',
    timelineDecor: '/landing-page-task/images/horizontal-decor-right.svg',
  },
  {
    title: 'That isn’t therapeutic',
    description:
      'Production takes place in our GMP-compliant, state-of-the-art facility using 100% organic ingredients verified by the USDA.',
    icon: '/landing-page-task/icons/heart.svg',
    mobileArrow: '/landing-page-task/icons/arrow-down-right.svg',
    timelineSide: 'left',
    timelineDecor: '/landing-page-task/images/horizontal-decor-left.svg',
  },
  {
    title: 'The result',
    description:
      'We deliver formulas to people who need them most. Nourishing your body with the right fuel improves human performance—from the inside out.',
    icon: '/landing-page-task/icons/running.svg',
    mobileArrow: null,
    timelineSide: 'right',
    timelineDecor: '/landing-page-task/images/horizontal-decor-right.svg',
  },
];

function renderMobile(container) {
  const markup = steps
    .map((step, index) => {
      const isLeft = index % 2 === 0;
      const arrow = step.mobileArrow
        ? `<img class="process__arrow-separator" src="${step.mobileArrow}" alt="arrow separator" />`
        : '';

      return `
          <li class="process__item process__${isLeft ? 'left' : 'right'}">
            <img class="process__item-icon" src="${step.icon}" alt="${step.title} icon" />
            <h3 class="process__item-title">${step.title}</h3>
            <p class="process__item-description">${step.description}</p>
          </li>
          ${arrow}`;
    })
    .join('');

  container.innerHTML = markup;
}

function renderDesktop(container) {
  const rows = steps.map((step, index) => {
    const isFirst = index === 0;
    const isLast = index === steps.length - 1;
    const nodeClasses = ['process-timeline__node'];

    if (isFirst) nodeClasses.push('process-timeline__node--top');
    if (isLast) nodeClasses.push('process-timeline__node--bottom');

    const cardHtml = `
        <article class="process-timeline__card process-timeline__card--${step.timelineSide}">
          <div class="process-timeline__card-body">
            <h3 class="process-timeline__card-heading">${step.title}</h3>
            <p class="process-timeline__card-text">${step.description}</p>
            <img src="${step.timelineDecor}" alt="horizontal decor" />
          </div>
        </article>`;

    const nodeHtml = `
        <div class="${nodeClasses.join(' ')}">
          <span class="process-timeline__node-icon">
            <img src="${step.icon}" alt="" />
          </span>
        </div>`;

    const spacerHtml = '<div class="process-timeline__spacer"></div>';

    if (step.timelineSide === 'left') {
      return `${cardHtml}${nodeHtml}${spacerHtml}`;
    }

    return `${spacerHtml}${nodeHtml}${cardHtml}`;
  });

  container.innerHTML = `
      <img
        class="process-timeline__vertical-decor"
        src="/landing-page-task/images/vertical-decor.svg"
        alt="vertical decor"
      />
      ${rows.join('')}`;
}

export function initProcess() {
  const mobileContainer = document.querySelector('[data-process-mobile]');
  const desktopContainer = document.querySelector('[data-process-desktop]');

  if (mobileContainer) renderMobile(mobileContainer);
  if (desktopContainer) renderDesktop(desktopContainer);
}
