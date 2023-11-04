import {createBasketCard, basketSumNotEmpty} from "./basket.js";
import {localStoragePromise, localStorageBasket} from "./index.js"

const cardWrap = document.getElementById('goods-cards-wrap');
const card = document.getElementById('goods-card');
const quickViewCard = document.getElementById('img-quick-view');
const cardViewWrap = document.getElementById('goods-card-view-wrap');
const exitCardViewWrap = document.getElementById('exit-view-card');
const backgroundCardiew = document.getElementById('background-card-view');

let urlMockApi = 'https://6540cac845bedb25bfc29fb1.mockapi.io/cards' 

fetch(urlMockApi)
    .then(response => response.json())
    .then(promiseWrap => localStorage.setItem('promise', JSON.stringify(promiseWrap)));

    function generateId() {
        let randomValue = Math.floor(Math.random() * 10000 * 10000);
        return randomValue
    }

    function generateRatings() {
      let randomValue = Math.floor(Math.random() * 1000);
      return randomValue
  }

    function getRandomRating(min, max, decimals) {
      var factor = Math.pow(10, decimals);
      var randomValue =  Math.random() * (max - min) + min;
      return Math.round(randomValue * factor) / factor;
    }


let thingsInBasket = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [];

let promiseWrap;


for(let i = 0; i < localStoragePromise.length; i++) {
  localStoragePromise[i].id =  generateId();

  createCard(
  localStoragePromise[i].img,
  localStoragePromise[i].price,
  localStoragePromise[i].price2,
  localStoragePromise[i].name,
  localStoragePromise[i].product,
  localStoragePromise[i].delivery,
  localStoragePromise[i].id)
}


for (let i = 0; i < thingsInBasket.length; i++) {

  createBasketCard(
  thingsInBasket[i].id,
  thingsInBasket[i].img, 
  thingsInBasket[i].product,
  thingsInBasket[i].name,
  thingsInBasket[i].price,
  thingsInBasket[i].price2,)
}


function createCard(img, price, price2, name, product, delivery, id) {
        const goodsCard = document.createElement('div');
        const goodsCardImage = document.createElement('div');
        const image = document.createElement('img');
        const imgQuickiew = document.createElement('span');
        const faHeart = document.createElement('i');
        const goodsPrice = document.createElement('div');
        const currentPrice = document.createElement('span');
        const priceBeforeDiscount = document.createElement('span');
        const goodsProduct = document.createElement('div');
        const goodsCompany = document.createElement('span');
        const goodsProductDescription = document.createElement('span');
        const goodsGrade = document.createElement('div');
        const faStar = document.createElement('i');
        const averageRating = document.createElement('span');
        const numberOfRatings = document.createElement('span');
        const goodsDelivery = document.createElement('div');
        const deliveryText = document.createElement('span');
        const deliveryDate = document.createElement('span');
        const basketButtonWrap = document.createElement('div');
        const basketButton = document.createElement('button');

        var randomRating =  getRandomRating(3.0, 5.0, 1);

        goodsCard.id = id
        goodsCard.classList.add('goods-card');
        goodsCardImage.id = 'goods-card-img'
        image.setAttribute('src', img);
        imgQuickiew.classList.add('img-quick-view');
        faHeart.classList.add('fa-regular')
        faHeart.classList.add('fa-heart');
        goodsPrice.id = 'price';
        currentPrice.id = 'current-price';
        priceBeforeDiscount.id = 'price-before-discount';
        goodsProduct.id = 'product';
        goodsCompany.id = 'company';
        goodsProductDescription.id = 'product-description';
        goodsGrade.id = 'grade';
        faStar.classList.add('fa-solid');
        faStar.classList.add('fa-star');
        averageRating.id = 'average-rating';
        numberOfRatings.id = 'number-of-ratings';
        goodsDelivery.id = 'delivery';
        deliveryText.id = 'delivery-text';
        deliveryDate.id = 'delivery-date';
        basketButtonWrap.id = 'basket-button-wrap';
        basketButton.id = 'basket-button';
         
        cardWrap.append(goodsCard);
        goodsCard.append(goodsCardImage);
        goodsCardImage.append(image);
        goodsCardImage.append(imgQuickiew);
        goodsCardImage.append(faHeart);
        goodsCard.append(goodsPrice);
        goodsPrice.append(currentPrice);
        goodsPrice.append(priceBeforeDiscount);
        goodsCard.append(goodsProduct);
        goodsProduct.append(goodsCompany);
        goodsProduct.append(goodsProductDescription);
        goodsCard.append(goodsGrade);
        goodsGrade.append(faStar);
        goodsGrade.append(averageRating);
        goodsGrade.append(numberOfRatings);
        goodsCard.append(goodsDelivery);
        goodsDelivery.append(deliveryText);
        goodsDelivery.append(deliveryDate);
        goodsCard.append(basketButtonWrap);
        basketButtonWrap.append(basketButton);

        let numberOfRatingsValue = generateRatings()

        currentPrice.innerHTML = `${price}$`;
        priceBeforeDiscount.innerHTML = `${price2}$`;
        goodsCompany.innerHTML = `${name}`;
        goodsProductDescription.innerHTML = ` / ${product}`;
        averageRating.innerHTML = `${randomRating}`;
        numberOfRatings.innerHTML = `${numberOfRatingsValue} ratings`;
        imgQuickiew.innerHTML = 'Quick view';
        basketButton.textContent = 'Add to cart';
        deliveryText.innerHTML = 'Delivery '
        deliveryDate.innerHTML = `${delivery}`;       

        imgQuickiew.addEventListener('click', cardViewAddClass);

        function cardViewAddClass() {
          cardViewWrap.style.display = 'block';
          backgroundCardiew.classList.add('active-body');
          createCardView(id, img, name, product, randomRating, numberOfRatingsValue, price, price2)
        }

        let obj = {
          id : id,
          img : img,
          product : product,
          name : name,
          price : price,
          price2 : price2,
        }

        basketButton.addEventListener('click', setCardBasket)

        function setCardBasket() {
          createBasketCard(id, img, product, name, price, price2)
          thingsInBasket.push(obj)
          localStorage.setItem('basket', JSON.stringify(thingsInBasket))
        }
    }

function createCardView(id ,img, name, product, avergeRating, ratings, price, price2) {  
  const goodsCardView = document.createElement('div');
  const goodsCardViewLeft = document.createElement('div');
  const goodsCardViewLeftImg = document.createElement('img');
  const viewLeftButtonWrap = document.createElement('div');
  const photoNumber = document.createElement('span');
  const videoBtn = document.createElement('span');
  const similarBtn = document.createElement('span');
  const goodsCardViewRight = document.createElement('div');
  const goodsCardViewRightTop = document.createElement('div');
  const exitViewCard = document.createElement('button');
  const faXmark = document.createElement('i');
  const productView = document.createElement('div');
  const productViewSpanName = document.createElement('span');
  const productViewSpanProduct = document.createElement('span');
  const gradeView = document.createElement('div');
  const rating = document.createElement('div');
  const faStar = document.createElement('i');
  const averageRating = document.createElement('span');
  const numberOfRatings = document.createElement('span');
  const textOfRatings = document.createElement('span');
  const articleWrap = document.createElement('div');
  const article = document.createElement('span');
  const articleNumber = document.createElement('span');
  const faCopy = document.createElement('i');
  const priceView = document.createElement('div');
  const currentPrice = document.createElement('span');
  const priceBeforeDiscount = document.createElement('span');
  const basketButtonViewWrap = document.createElement('div');
  const basketButton = document.createElement('button');
  const faHeart = document.createElement('i');
  const goodsCardViewRightBottom = document.createElement('div')
  const moreInfoView = document.createElement('div');
  const moreInfo = document.createElement('span');
  const faPlay = document.createElement('i');
  const faGlass = document.createElement('i');

  faPlay.classList.add('fa-solid');
  faPlay.classList.add('fa-play');
  faGlass.classList.add('fa-solid');
  faGlass.classList.add('fa-magnifying-glass');

  goodsCardView.classList.add('goods-card-view');
  goodsCardView.id = id
  goodsCardViewLeft.id = 'goods-card-view-left';
  goodsCardViewLeftImg.setAttribute('src', img)
  viewLeftButtonWrap.id = 'view-left-button-wrap';
  photoNumber.id = 'photo-number';
  videoBtn.id = 'video-btn';
  similarBtn.id = 'similar-btn';
  goodsCardViewRight.id = 'goods-card-view-right';
  goodsCardViewRightTop.id = 'goods-card-view-right-top';
  exitViewCard.id = 'exit-view-card';
  faXmark.classList.add('fa-solid');
  faXmark.classList.add('fa-xmark');
  productView.id = 'product-view';
  gradeView.id = 'grade-view';
  rating.id = 'rating';
  faStar.classList.add('fa-solid');
  faStar.classList.add('fa-star');
  averageRating.id = 'average-rating'
  numberOfRatings.id = 'number-of-ratings';
  textOfRatings.id = 'text-of-ratings';
  articleWrap.id = 'article-wrap';
  article.id = 'article';
  articleNumber.id = 'article-number';
  faCopy.classList.add('fa-regular');
  faCopy.classList.add('fa-copy');
  priceView.id = 'price-view';
  currentPrice.id = 'current-price';
  priceBeforeDiscount.id = 'price-before-discount';
  basketButtonViewWrap.id = 'basket-button-view-wrap';
  basketButton.id = 'basket-button';
  faHeart.classList.add('fa-regular');
  faHeart.classList.add('fa-heart');
  goodsCardViewRightBottom.id = 'goods-card-view-right-bottom';
  moreInfoView.id = 'more-info-view';
  moreInfo.id = 'more-info';

  cardViewWrap.append(goodsCardView);
  goodsCardView.append(goodsCardViewLeft);
  goodsCardViewLeft.append(goodsCardViewLeftImg);
  goodsCardViewLeft.append(viewLeftButtonWrap);
  viewLeftButtonWrap.append(photoNumber);
  viewLeftButtonWrap.append(videoBtn);
  videoBtn.appendChild(faPlay);
  viewLeftButtonWrap.append(similarBtn);
  similarBtn.appendChild(faGlass);
  goodsCardView.append(goodsCardViewRight);
  goodsCardViewRight.append(goodsCardViewRightTop);

  goodsCardViewRightTop.append(exitViewCard);
  exitViewCard.append(faXmark);
  goodsCardViewRightTop.append(productView);
  productView.append(productViewSpanName);
  productView.append(productViewSpanProduct);
  goodsCardViewRightTop.append(gradeView);


  gradeView.append(rating);
  rating.append(faStar);
  rating.append(averageRating);
  gradeView.append(numberOfRatings);
  gradeView.append(textOfRatings);
  gradeView.append(articleWrap);
  articleWrap.append(article);
  articleWrap.append(articleNumber);
  articleWrap.append(faCopy);

  goodsCardViewRightTop.append(priceView);
  priceView.append(currentPrice);
  priceView.append(priceBeforeDiscount);

  goodsCardViewRightTop.append(basketButtonViewWrap);
  basketButtonViewWrap.append(basketButton);
  basketButtonViewWrap.append(faHeart);

  goodsCardViewRight.append(goodsCardViewRightBottom);
  goodsCardViewRightBottom.append(moreInfoView);
  moreInfoView.append(moreInfo);

  photoNumber.innerHTML = `1/16`;
  videoBtn.innerHTML = `Video`;
  similarBtn.innerHTML = `Similar`;
  productViewSpanName.innerHTML = `${name} / `;
  productViewSpanProduct.innerHTML = `${product}`;
  averageRating.innerHTML = `${avergeRating}`;
  numberOfRatings.innerHTML = `${ratings}`;
  textOfRatings.innerHTML = `ratings`;
  article.innerHTML = `Article:`;
  articleNumber.innerHTML = `${generateId()}`;
  currentPrice.innerHTML = `${price}$`;
  priceBeforeDiscount.innerHTML = `${price2}$`;
  basketButton.innerHTML = `Add to cart`;
  moreInfo.innerHTML = `More information about the product`;

  faXmark.addEventListener('click', cardViewRemoveClass)

  function cardViewRemoveClass() {
    cardViewWrap.style.display = '';
    backgroundCardiew.classList.remove('active-body');
  }

  basketButton.addEventListener('click',setCardBasket);
  basketButton.addEventListener('click',cardViewRemoveClass);

  let obj = {
    id : id,
    img : img,
    product : product,
    name : name,
    price : price,
    price2 : price2,
  }

  function setCardBasket() {
    createBasketCard(id, img, product, name, price, price2)
    thingsInBasket.push(obj)
    localStorage.setItem('basket', JSON.stringify(thingsInBasket))
  }
}
