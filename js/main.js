
let droplink = document.querySelector('.site-nav__drop-link');
let dropList = document.querySelector('.site-nav__drop-list');


droplink.addEventListener('click',function(){
  dropList.classList.toggle('element--none');
});


let bag = document.querySelector('.bag');
let bags = document.querySelector('.bag2');
let bagBlock = document.querySelector('.site-header__bag');



bag.addEventListener('click',function(){
  bagBlock.classList.toggle('bsg-open');
});
bags.addEventListener('click',function(){
  bagBlock.classList.toggle('bsg-open');
});


