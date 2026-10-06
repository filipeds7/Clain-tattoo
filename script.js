const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const carousel = document.querySelector('#carousel');
const next = document.querySelector('.slider-btn.next');
const prev = document.querySelector('.slider-btn.prev');

function slideAmount() {
  const card = carousel?.querySelector('.work-card');
  return card ? card.getBoundingClientRect().width + 16 : 320;
}

next?.addEventListener('click', () => carousel?.scrollBy({left: slideAmount(), behavior: 'smooth'}));
prev?.addEventListener('click', () => carousel?.scrollBy({left: -slideAmount(), behavior: 'smooth'}));

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${entry.target.id}`
      ));
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));
