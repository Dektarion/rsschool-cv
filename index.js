const scrollUP = document.querySelector('.scrollup');

document.addEventListener('scroll', () => {
  if (scrollY >= 200) {
    scrollUP.classList.add('scrollup_block');
  } else if (scrollY < 200) {
    scrollUP.classList.remove('scrollup_block');
  }
});

scrollUP.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
});
});

const mobileMenuIcon = document.querySelector('.header__mobile-hamburger');
const mobileMenuLine = document.querySelectorAll('.header__mobile-hamburger-line');
const mobileNavMenu = document.querySelector('.header__nav_mobile');

mobileMenuIcon.addEventListener('click', () => {
  mobileMenuIcon.classList.toggle('open');
  mobileNavMenu.classList.toggle('open');
});

mobileNavMenu.addEventListener('click', (event) => {
  if (event.target.classList.contains('nav__link')) {
    mobileNavMenu.classList.toggle('open');
    mobileMenuIcon.classList.toggle('open');
  }
});

const experienceItems = document.querySelectorAll('.experience__item');

experienceItems.forEach(item => {
  item.addEventListener('mouseover', (event) => {
      experienceItems.forEach(item => item.classList.remove('experience_description_show'));
      item.classList.add('experience_description_show');
  });

  item.addEventListener('mouseout', (event) => {
    experienceItems.forEach(item => item.classList.remove('experience_description_show'));
  });
});


/* old realisation */

// function mobileMenu() {
//   mobileMenuIcon.classList.add('open');
//   mobileNavMenu.classList.add('open');
// }

// function removeOpen() {
//   mobileMenuIcon.classList.remove('open');
//   mobileNavMenu.classList.remove('open');
// }

// document.addEventListener ('click', (e) => {
//   if (e.target === mobileMenuIcon || e.target === mobileMenuLine[0] || e.target === mobileMenuLine[1] || e.target === mobileMenuLine[2])  {
//     mobileMenu();
//   } else if (e.target !== e.currentTarget) {
//     removeOpen();
//   }
//   return;
// });