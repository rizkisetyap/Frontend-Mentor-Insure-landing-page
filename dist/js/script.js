const body = document.body;
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.querySelector('.header__mobile-menu');
const overlay = document.querySelector('.overlay');

mobileMenuBtn.addEventListener('click', ()=> {
  if(overlay.classList.contains('open')){
    mobileMenuBtn.src = '/dist/images/icon-close.svg';
  }else {
    mobileMenuBtn.src = '/dist/images/icon-hamburger.svg';
  }
  body.classList.toggle('noscroll');
  overlay.classList.toggle('open');
  mobileMenu.classList.toggle('open');

});