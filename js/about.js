
const bag = document.querySelector('.bag');
const bags = document.querySelector('.bag2');
const bagBlock = document.querySelector('.site-header__bag');



bag.addEventListener('click',function(){
  bagBlock.classList.toggle('bsg-open');
});


const droplink = document.querySelector('.site-nav__drop-link');
const dropList = document.querySelector('.site-nav__drop-list');


droplink.addEventListener('click',function(){
  dropList.classList.toggle('element--none');
});
