const buttonUp = document.getElementById('chevron-up');
const chevronUp = document.getElementById('up');
const basketLeftCardsWrap = document.getElementById('basket-left-cards-wrap');
const buttonDown = document.getElementById('chevron-down')
const chevronDown = document.getElementById('down');
const basketSection = document.getElementById('basket-section');
const basket = document.getElementById('basket');
const swiperSection = document.getElementById('swiper-mouse');
const goodsSection = document.getElementById('goods');

basket.addEventListener('click', openCloseBasket);
buttonUp.addEventListener('click', chevronUpEvent)
buttonDown.addEventListener('click', chevronDownEvent)

function openCloseBasket() {
    swiperSection.style.display = 'none';
    goodsSection.style.display = 'none';
    basketSection.style.display = 'block';
  }  

function chevronUpEvent() {
  basketLeftCardsWrap.style.display = 'none';
  buttonUp.style.display = 'none';
  chevronUp.style.display = 'none'
  buttonDown.style.display = 'block';
  chevronDown.style.display = 'block';
}

function chevronDownEvent() {
  basketLeftCardsWrap.style.display = 'block';
  buttonUp.style.display = 'block';
  chevronUp.style.display = 'block'
  buttonDown.style.display = 'none';
  chevronDown.style.display = 'none';
}