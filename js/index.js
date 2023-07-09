const scrollUP = document.querySelector('.scrollup');

document.addEventListener('scroll', () => {
  if (scrollY >= 200) {
    scrollUP.classList.add('scrollup__block');
  } else if (scrollY < 200) {
    scrollUP.classList.remove('scrollup__block');
  }
});

scrollUP.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
});
});

const mobileMenuIcon = document.querySelector('.hamburger');
const mobileMenuLine = document.querySelectorAll('.hamburger__line');
const navMenu = document.querySelector('.header__nav');

mobileMenuIcon.addEventListener('click', () => {
  mobileMenuIcon.classList.toggle('open');
  navMenu.classList.toggle('open');
});

navMenu.addEventListener('click', (event) => {
  if (event.target.classList.contains('nav-menu__link')) {
    navMenu.classList.toggle('open');
    mobileMenuIcon.classList.toggle('open');
  }
});

const experienceItems = document.querySelectorAll('.experience__item');

experienceItems.forEach(item => {
  item.addEventListener('mouseover', (event) => {
      experienceItems.forEach(item => item.classList.remove('experience__description_show'));
      item.classList.add('experience__description_show');
  });

  item.addEventListener('mouseout', (event) => {
    experienceItems.forEach(item => item.classList.remove('experience__description_show'));
  });
});