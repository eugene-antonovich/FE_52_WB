const buttonUp = document.getElementById('chevron-up');
const chevronUp = document.getElementById('up');
const buttonDown = document.getElementById('chevron-down')
const chevronDown = document.getElementById('down');
const basketSection = document.getElementById('basket-section');
const basket = document.getElementById('basket');
const swiperSection = document.getElementById('swiper-mouse');
const goodsSection = document.getElementById('goods');
const basketLeftCardsWrap = document.getElementById('basket-left-cards-wrap');
const headerBasketSum = document.getElementById('header-basket-sum');
const goodsQuantity = document.getElementById('goods-quantity')
const basketPriceGoods = document.getElementById('basket-price-goods');
const basketPriceSumTop = document.createElement('div');
basketPriceSumTop.classList.add('goods-price-sum-top');

const basketPriceSumBottom = document.createElement('div');
basketPriceSumBottom.classList.add('goods-price-sum-bottom');


headerBasketSum.innerHTML = basketLeftCardsWrap.children.length;

let ar = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [];

let basketSumTop = 0;
let basketSumBottom = 0;

function createBasketCard(id, img, product, name, price, price2) {
  const basketLeftCardsWrap = document.getElementById('basket-left-cards-wrap');
  const basketLeftCard = document.createElement('div');
  const basketLeftCardImg = document.createElement('div');
  const basketImg = document.createElement('img');
  const basketLeftCardProduct = document.createElement('div');
  const basketProductDescription = document.createElement('span');
  const basketCompany = document.createElement('span');
  const basketLeftCardCounter = document.createElement('div');
  const basketCounterMinus = document.createElement('button');
  const faMinus = document.createElement('i');
  const basketCounterSum = document.createElement('span');
  const basketCounterPlus = document.createElement('button');
  const faPlus = document.createElement('i');
  const basketLeftCardPrice = document.createElement('div');
  const basketCurrentPrice = document.createElement('span');
  const basketPriceBeforeDiscount = document.createElement('span');
  const basketLeftCardIcons = document.createElement('div');
  const faHeart = document.createElement('i');
  const faTrash = document.createElement('i');

  basketLeftCard.id = id
  basketLeftCard.classList.add('basket-left-card');
  basketLeftCardImg.id = 'basket-left-card-img';
  basketImg.setAttribute('src', img);
  basketLeftCardProduct.id = 'basket-left-card-product';
  basketProductDescription.id = 'basket-product-description';
  basketCompany.id = 'basket-company';
  basketLeftCardCounter.id = 'basket-left-card-counter';
  basketCounterMinus.id = 'basket-counter-minus';
  faMinus.classList.add('fa-solid');
  faMinus.classList.add('fa-minus');
  faPlus.classList.add('fa-solid');
  faPlus.classList.add('fa-plus');
  basketCounterSum.id = 'basket-counter-sum';
  basketCounterPlus.id = 'basket-counter-plus';
  basketLeftCardPrice.id = 'basket-left-card-price';
  basketCurrentPrice.id = 'basket-current-price';
  basketPriceBeforeDiscount.id = 'basket-price-before-discount';
  basketLeftCardIcons.id = 'basket-left-card-icons';
  faHeart.classList.add('fa-solid');
  faHeart.classList.add('fa-heart');
  faTrash.classList.add('fa-solid');
  faTrash.classList.add('fa-trash');

  basketLeftCardsWrap.append(basketLeftCard);
  basketLengthCheck()
  basketLeftCard.append(basketLeftCardImg);
  basketLeftCardImg.append(basketImg);
  basketLeftCard.append(basketLeftCardProduct);
  basketLeftCardProduct.append(basketProductDescription);
  basketLeftCardProduct.append(basketCompany);


  basketLeftCard.append(basketLeftCardCounter);
  basketLeftCardCounter.append(basketCounterMinus);
  basketCounterMinus.append(faMinus);
  basketLeftCardCounter.append(basketCounterSum);
  basketLeftCardCounter.append(basketCounterPlus);
  basketCounterPlus.append(faPlus);

  basketLeftCard.append(basketLeftCardPrice);
  basketLeftCardPrice.append(basketCurrentPrice);
  basketLeftCardPrice.append(basketPriceBeforeDiscount);

  basketLeftCard.append(basketLeftCardIcons);
  basketLeftCardIcons.append(faHeart);
  basketLeftCardIcons.append(faTrash);

  basketProductDescription.innerHTML = `${product}, `;
  basketCompany.innerHTML = `${name}`;
  basketCurrentPrice.innerHTML = `${price}$`;
  basketPriceBeforeDiscount.innerHTML = `${price2}$`;
  basketCounterSum.innerHTML = `1`

  basket.addEventListener('click', openCloseBasket);
  buttonUp.addEventListener('click', chevronUpEvent)
  buttonDown.addEventListener('click', chevronDownEvent)
  faTrash.addEventListener('click', removeCard)
  faTrash.addEventListener('click', basketLengthCheck)

  faTrash.addEventListener('click', parentTrash)

  function sum1() {
    return basketSumTop += +price
  }

  function sum2() {
    return basketSumBottom += +price
  }

  function sum3() {
    return basketSumTop -= +price
  }

  function sum4() {
    return basketSumBottom -= +price
  }

  

function parentTrash() {
var parentEl = faTrash.parentNode;
var grandParentEl = +parentEl.parentNode.id;

  var filteredAr = ar.filter(function(item) {
    return item.id !== grandParentEl
  })
  priceBasket(sum3(), sum4())
  localStorage.setItem('basket', JSON.stringify(filteredAr))
}


function basketLengthCheck() {
  headerBasketSum.innerHTML = basketLeftCardsWrap.children.length;
  goodsQuantity.innerHTML = basketLeftCardsWrap.children.length
}

function removeCard() {
  basketLeftCard.remove()
}

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


basketPriceGoods.append(basketPriceSumTop);
basketPriceGoods.append(basketPriceSumBottom);
function priceBasket(a,b) {
basketPriceSumTop.textContent = `${a}$`;
basketPriceSumBottom.innerHTML = `${b}$`;
}
priceBasket(sum1(), sum2())
}

export {createBasketCard};
