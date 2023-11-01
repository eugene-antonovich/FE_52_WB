const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const swiperWrap = document.getElementById('swiper-mouse');
const swiperBtnNext = document.getElementById('next');
const swiperBtnPrev = document.getElementById('prev');

swiperWrap.addEventListener('mouseover', active);
swiperWrap.addEventListener('mouseover', active);

swiperWrap.addEventListener('mouseout', notActie);
swiperWrap.addEventListener('mouseout', notActie);
function active() {
  swiperBtnNext.classList.add('active');
  swiperBtnPrev.classList.add('active');
}

function notActie() {
  swiperBtnNext.classList.remove('active');
  swiperBtnPrev.classList.remove('active');
}