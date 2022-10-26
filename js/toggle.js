'use strict';

let menuNav = document.querySelector('.main-nav');
let toggleBtn = document.querySelector('.main-nav__burger');
let menuList = document.querySelector('.main-nav__list');

toggleBtn.addEventListener('click', function() {
  menuNav.classList.toggle('main-nav--show');
  menuList.classList.toggle('nav-show');
});