const cardWrap = document.getElementById('goods-cards-wrap');
const card = document.getElementById('goods-card');
const quickViewCard = document.getElementById('img-quick-view');
const cardViewWrap = document.getElementById('goods-card-view-wrap');
const exitCardViewWrap = document.getElementById('exit-view-card');
const backgroundCardiew = document.getElementById('background-card-view');

exitCardViewWrap.addEventListener('click', cardViewRemoveClass)

quickViewCard.addEventListener('click', cardViewAddClass);

function cardViewAddClass() {
  cardViewWrap.style.display = 'block';
  backgroundCardiew.classList.add('active-body');
}

function cardViewRemoveClass() {
  cardViewWrap.style.display = '';
  backgroundCardiew.classList.remove('active-body');
}
