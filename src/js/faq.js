const faqs = [
  {
    question: 'What are the effective ingredients in [product name]?',
    answer: [
      'Pellentesque vitae convallis quam, in ultricies leo:',
      '<b>Lorem ipsum dolor sit ame:</b>',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida sollicitudin diam, vestibulum placerat nisl finibus ut. Duis ac pulvinar justo. Aliquam mi nisl, gravida eget suscipit non, sodales in tortor. Nam purus sem, blandit non justo ac, ornare tempor quam. Morbi pharetra vehicula ornare. Proin gravida turpis orci, sit amet sollicitudin mi rutrum nec.',
      '<b>Curabitur gravida ullamcorper dui:</b>',
      'Pellentesque - tincidunt efficitur suscipit. Aliquam commodo id est eu cursus. Mauris ut elit quis nunc eleifend egestas in ac lorem. Pellentesque - vitae convallis quam, in ultricies leo. Curabitur gravida ullamcorper dui. Aliquam velit arcu, ultrices nec mauris a, vehicula fermentum nisi. Donec commodo - nisl at magna congue volutpat. Suspendisse sed nulla ultricies, elementum risus venenatis, eleifend sem. Vestibulum rutrum ut lectus id dignissim. Curabitur eros diam - bibendum in ipsum ut, posuere suscipit magna. Maecenas at congue purus, vel facilisis odio. Praesent scelerisque, ipsum vel ultricies congue, odio turpis pharetra tellus, ac auctor orci tortor volutpat lectus. Vestibulum tempor - ipsum et nibh mattis, sed volutpat dui bibendum.',
    ],
    open: true,
  },
  {
    question: 'Other question?',
    answer: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
  },
  {
    question: 'Other question?',
    answer: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
  },
  {
    question: 'Other question?',
    answer: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
  },
];

function renderFaqItem({ question, answer, open }) {
  const body = answer.map((paragraph) => `<p>${paragraph}</p>`).join('');

  return `
  <details class="faq__item"${open ? ' open' : ''}>
  <summary class="faq__question">
  <span>${question}</span>
  <img src="/landing-page-task/icons/chevron-down.svg" alt="chevron-down" aria-hidden="true" class="faq__icon"/>
  </summary>
  <div class="faq__answer">${body}</div>
  </details>
  `;
}

export function initFaq() {
  const container = document.querySelector('.faq__list');
  if (!container) return;
  container.innerHTML = faqs.map(renderFaqItem).join('');
}
