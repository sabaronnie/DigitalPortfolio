const menuButton = document.querySelector('.nav-toggle');
const menu = document.querySelector('#nav-links');

if (menuButton && menu) {
  document.documentElement.classList.add('js');
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  };

  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });

  window.matchMedia('(min-width: 841px)').addEventListener('change', closeMenu);
}

// Reveal a linked detail panel, including any closed panels around it.
const revealDetails = (hash) => {
  let id;
  try {
    id = decodeURIComponent(hash.slice(1));
  } catch {
    return;
  }
  const target = document.getElementById(id);
  let revealed = false;
  for (let element = target; element; element = element.parentElement) {
    if (element.tagName === 'DETAILS' && !element.open) {
      element.open = true;
      revealed = true;
    }
  }
  if (revealed) target.scrollIntoView({ block: 'start' });
};

document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (link) revealDetails(link.hash);
});

window.addEventListener('hashchange', () => revealDetails(window.location.hash));
revealDetails(window.location.hash);
