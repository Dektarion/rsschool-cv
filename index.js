// $(function() {
//   $('.scrollup').click(function() {
//     $("html, body").animate({
//     scrollTop:0
//     },300);
//   })
//   })
//   $(window).scroll(function() {
//   if ($(this).scrollTop()>200) {
//     $('.scrollup').fadeIn();
//   }
//   else {
//     $('.scrollup').fadeOut();
//   }
//   });


const mobileMenuIcon = document.querySelector('.header__mobile-hamburger');
const mobileMenuLine = document.querySelectorAll('.header__mobile-hamburger-line');
const mobileNavMenu = document.querySelector('.header__nav_mobile');

function mobileMenu() {
  mobileMenuIcon.classList.add('open');
  mobileNavMenu.classList.add('open');
}

function removeOpen() {
  mobileMenuIcon.classList.remove('open');
  mobileNavMenu.classList.remove('open');
}

document.addEventListener ('click', (e) => {
  if (e.target === mobileMenuIcon || e.target === mobileMenuLine[0] || e.target === mobileMenuLine[1] || e.target === mobileMenuLine[2])  {
    mobileMenu();
  } else if (e.target !== e.currentTarget) {
    removeOpen();
  }
  return;
});