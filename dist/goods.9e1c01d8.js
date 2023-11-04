// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/basket.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBasketCard = createBasketCard;
var buttonUp = document.getElementById('chevron-up');
var chevronUp = document.getElementById('up');
var buttonDown = document.getElementById('chevron-down');
var chevronDown = document.getElementById('down');
var basketSection = document.getElementById('basket-section');
var basket = document.getElementById('basket');
var swiperSection = document.getElementById('swiper-mouse');
var goodsSection = document.getElementById('goods');
var basketLeftCardsWrap = document.getElementById('basket-left-cards-wrap');
var headerBasketSum = document.getElementById('header-basket-sum');
var goodsQuantity = document.getElementById('goods-quantity');
var basketPriceGoods = document.getElementById('basket-price-goods');
var basketPriceSumTop = document.createElement('div');
basketPriceSumTop.classList.add('goods-price-sum-top');
var basketPriceSumBottom = document.createElement('div');
basketPriceSumBottom.classList.add('goods-price-sum-bottom');
headerBasketSum.innerHTML = basketLeftCardsWrap.children.length;
var ar = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [];
var basketSumTop = 0;
var basketSumBottom = 0;
function createBasketCard(id, img, product, name, price, price2) {
  var basketLeftCardsWrap = document.getElementById('basket-left-cards-wrap');
  var basketLeftCard = document.createElement('div');
  var basketLeftCardImg = document.createElement('div');
  var basketImg = document.createElement('img');
  var basketLeftCardProduct = document.createElement('div');
  var basketProductDescription = document.createElement('span');
  var basketCompany = document.createElement('span');
  var basketLeftCardCounter = document.createElement('div');
  var basketCounterMinus = document.createElement('button');
  var faMinus = document.createElement('i');
  var basketCounterSum = document.createElement('span');
  var basketCounterPlus = document.createElement('button');
  var faPlus = document.createElement('i');
  var basketLeftCardPrice = document.createElement('div');
  var basketCurrentPrice = document.createElement('span');
  var basketPriceBeforeDiscount = document.createElement('span');
  var basketLeftCardIcons = document.createElement('div');
  var faHeart = document.createElement('i');
  var faTrash = document.createElement('i');
  basketLeftCard.id = id;
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
  basketLengthCheck();
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
  basketProductDescription.innerHTML = "".concat(product, ", ");
  basketCompany.innerHTML = "".concat(name);
  basketCurrentPrice.innerHTML = "".concat(price, "$");
  basketPriceBeforeDiscount.innerHTML = "".concat(price2, "$");
  basketCounterSum.innerHTML = "1";
  basket.addEventListener('click', openCloseBasket);
  buttonUp.addEventListener('click', chevronUpEvent);
  buttonDown.addEventListener('click', chevronDownEvent);
  faTrash.addEventListener('click', removeCard);
  faTrash.addEventListener('click', basketLengthCheck);
  faTrash.addEventListener('click', parentTrash);
  function sum1() {
    return basketSumTop += +price;
  }
  function sum2() {
    return basketSumBottom += +price;
  }
  function sum3() {
    return basketSumTop -= +price;
  }
  function sum4() {
    return basketSumBottom -= +price;
  }
  function parentTrash() {
    var parentEl = faTrash.parentNode;
    var grandParentEl = +parentEl.parentNode.id;
    var filteredAr = ar.filter(function (item) {
      return item.id !== grandParentEl;
    });
    priceBasket(sum3(), sum4());
    localStorage.setItem('basket', JSON.stringify(filteredAr));
  }
  function basketLengthCheck() {
    headerBasketSum.innerHTML = basketLeftCardsWrap.children.length;
    goodsQuantity.innerHTML = basketLeftCardsWrap.children.length;
  }
  function removeCard() {
    basketLeftCard.remove();
  }
  function openCloseBasket() {
    swiperSection.style.display = 'none';
    goodsSection.style.display = 'none';
    basketSection.style.display = 'block';
  }
  function chevronUpEvent() {
    basketLeftCardsWrap.style.display = 'none';
    buttonUp.style.display = 'none';
    chevronUp.style.display = 'none';
    buttonDown.style.display = 'block';
    chevronDown.style.display = 'block';
  }
  function chevronDownEvent() {
    basketLeftCardsWrap.style.display = 'block';
    buttonUp.style.display = 'block';
    chevronUp.style.display = 'block';
    buttonDown.style.display = 'none';
    chevronDown.style.display = 'none';
  }
  basketPriceGoods.append(basketPriceSumTop);
  basketPriceGoods.append(basketPriceSumBottom);
  function priceBasket(a, b) {
    basketPriceSumTop.textContent = "".concat(a, "$");
    basketPriceSumBottom.innerHTML = "".concat(b, "$");
  }
  priceBasket(sum1(), sum2());
}
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localStoragePromise = exports.localStorageBasket = void 0;
var localStoragePromise = exports.localStoragePromise = JSON.parse(localStorage.getItem('promise'));
var localStorageBasket = exports.localStorageBasket = JSON.parse(localStorage.getItem('basket-sum'));
},{}],"js/goods.js":[function(require,module,exports) {
"use strict";

var _basket = require("./basket.js");
var _index = require("./index.js");
var cardWrap = document.getElementById('goods-cards-wrap');
var card = document.getElementById('goods-card');
var quickViewCard = document.getElementById('img-quick-view');
var cardViewWrap = document.getElementById('goods-card-view-wrap');
var exitCardViewWrap = document.getElementById('exit-view-card');
var backgroundCardiew = document.getElementById('background-card-view');
var urlMockApi = 'https://6540cac845bedb25bfc29fb1.mockapi.io/cards';
fetch(urlMockApi).then(function (response) {
  return response.json();
}).then(function (promiseWrap) {
  return localStorage.setItem('promise', JSON.stringify(promiseWrap));
});
function generateId() {
  var randomValue = Math.floor(Math.random() * 10000 * 10000);
  return randomValue;
}
function generateRatings() {
  var randomValue = Math.floor(Math.random() * 1000);
  return randomValue;
}
function getRandomRating(min, max, decimals) {
  var factor = Math.pow(10, decimals);
  var randomValue = Math.random() * (max - min) + min;
  return Math.round(randomValue * factor) / factor;
}
var thingsInBasket = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [];
var promiseWrap;
for (var i = 0; i < _index.localStoragePromise.length; i++) {
  _index.localStoragePromise[i].id = generateId();
  createCard(_index.localStoragePromise[i].img, _index.localStoragePromise[i].price, _index.localStoragePromise[i].price2, _index.localStoragePromise[i].name, _index.localStoragePromise[i].product, _index.localStoragePromise[i].delivery, _index.localStoragePromise[i].id);
}
for (var _i = 0; _i < thingsInBasket.length; _i++) {
  (0, _basket.createBasketCard)(thingsInBasket[_i].id, thingsInBasket[_i].img, thingsInBasket[_i].product, thingsInBasket[_i].name, thingsInBasket[_i].price, thingsInBasket[_i].price2);
}
function createCard(img, price, price2, name, product, delivery, id) {
  var goodsCard = document.createElement('div');
  var goodsCardImage = document.createElement('div');
  var image = document.createElement('img');
  var imgQuickiew = document.createElement('span');
  var faHeart = document.createElement('i');
  var goodsPrice = document.createElement('div');
  var currentPrice = document.createElement('span');
  var priceBeforeDiscount = document.createElement('span');
  var goodsProduct = document.createElement('div');
  var goodsCompany = document.createElement('span');
  var goodsProductDescription = document.createElement('span');
  var goodsGrade = document.createElement('div');
  var faStar = document.createElement('i');
  var averageRating = document.createElement('span');
  var numberOfRatings = document.createElement('span');
  var goodsDelivery = document.createElement('div');
  var deliveryText = document.createElement('span');
  var deliveryDate = document.createElement('span');
  var basketButtonWrap = document.createElement('div');
  var basketButton = document.createElement('button');
  var randomRating = getRandomRating(3.0, 5.0, 1);
  goodsCard.id = id;
  goodsCard.classList.add('goods-card');
  goodsCardImage.id = 'goods-card-img';
  image.setAttribute('src', img);
  imgQuickiew.classList.add('img-quick-view');
  faHeart.classList.add('fa-regular');
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
  var numberOfRatingsValue = generateRatings();
  currentPrice.innerHTML = "".concat(price, "$");
  priceBeforeDiscount.innerHTML = "".concat(price2, "$");
  goodsCompany.innerHTML = "".concat(name);
  goodsProductDescription.innerHTML = " / ".concat(product);
  averageRating.innerHTML = "".concat(randomRating);
  numberOfRatings.innerHTML = "".concat(numberOfRatingsValue, " ratings");
  imgQuickiew.innerHTML = 'Quick view';
  basketButton.textContent = 'Add to cart';
  deliveryText.innerHTML = 'Delivery ';
  deliveryDate.innerHTML = "".concat(delivery);
  imgQuickiew.addEventListener('click', cardViewAddClass);
  function cardViewAddClass() {
    cardViewWrap.style.display = 'block';
    backgroundCardiew.classList.add('active-body');
    createCardView(id, img, name, product, randomRating, numberOfRatingsValue, price, price2);
  }
  var obj = {
    id: id,
    img: img,
    product: product,
    name: name,
    price: price,
    price2: price2
  };
  basketButton.addEventListener('click', setCardBasket);
  function setCardBasket() {
    (0, _basket.createBasketCard)(id, img, product, name, price, price2);
    thingsInBasket.push(obj);
    localStorage.setItem('basket', JSON.stringify(thingsInBasket));
  }
}
function createCardView(id, img, name, product, avergeRating, ratings, price, price2) {
  var goodsCardView = document.createElement('div');
  var goodsCardViewLeft = document.createElement('div');
  var goodsCardViewLeftImg = document.createElement('img');
  var viewLeftButtonWrap = document.createElement('div');
  var photoNumber = document.createElement('span');
  var videoBtn = document.createElement('span');
  var similarBtn = document.createElement('span');
  var goodsCardViewRight = document.createElement('div');
  var goodsCardViewRightTop = document.createElement('div');
  var exitViewCard = document.createElement('button');
  var faXmark = document.createElement('i');
  var productView = document.createElement('div');
  var productViewSpanName = document.createElement('span');
  var productViewSpanProduct = document.createElement('span');
  var gradeView = document.createElement('div');
  var rating = document.createElement('div');
  var faStar = document.createElement('i');
  var averageRating = document.createElement('span');
  var numberOfRatings = document.createElement('span');
  var textOfRatings = document.createElement('span');
  var articleWrap = document.createElement('div');
  var article = document.createElement('span');
  var articleNumber = document.createElement('span');
  var faCopy = document.createElement('i');
  var priceView = document.createElement('div');
  var currentPrice = document.createElement('span');
  var priceBeforeDiscount = document.createElement('span');
  var basketButtonViewWrap = document.createElement('div');
  var basketButton = document.createElement('button');
  var faHeart = document.createElement('i');
  var goodsCardViewRightBottom = document.createElement('div');
  var moreInfoView = document.createElement('div');
  var moreInfo = document.createElement('span');
  var faPlay = document.createElement('i');
  var faGlass = document.createElement('i');
  faPlay.classList.add('fa-solid');
  faPlay.classList.add('fa-play');
  faGlass.classList.add('fa-solid');
  faGlass.classList.add('fa-magnifying-glass');
  goodsCardView.classList.add('goods-card-view');
  goodsCardView.id = id;
  goodsCardViewLeft.id = 'goods-card-view-left';
  goodsCardViewLeftImg.setAttribute('src', img);
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
  averageRating.id = 'average-rating';
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
  photoNumber.innerHTML = "1/16";
  videoBtn.innerHTML = "Video";
  similarBtn.innerHTML = "Similar";
  productViewSpanName.innerHTML = "".concat(name, " / ");
  productViewSpanProduct.innerHTML = "".concat(product);
  averageRating.innerHTML = "".concat(avergeRating);
  numberOfRatings.innerHTML = "".concat(ratings);
  textOfRatings.innerHTML = "ratings";
  article.innerHTML = "Article:";
  articleNumber.innerHTML = "".concat(generateId());
  currentPrice.innerHTML = "".concat(price, "$");
  priceBeforeDiscount.innerHTML = "".concat(price2, "$");
  basketButton.innerHTML = "Add to cart";
  moreInfo.innerHTML = "More information about the product";
  faXmark.addEventListener('click', cardViewRemoveClass);
  function cardViewRemoveClass() {
    cardViewWrap.style.display = '';
    backgroundCardiew.classList.remove('active-body');
  }
  basketButton.addEventListener('click', setCardBasket);
  basketButton.addEventListener('click', cardViewRemoveClass);
  var obj = {
    id: id,
    img: img,
    product: product,
    name: name,
    price: price,
    price2: price2
  };
  function setCardBasket() {
    (0, _basket.createBasketCard)(id, img, product, name, price, price2);
    thingsInBasket.push(obj);
    localStorage.setItem('basket', JSON.stringify(thingsInBasket));
  }
}
},{"./basket.js":"js/basket.js","./index.js":"js/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56993" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/goods.js"], null)
//# sourceMappingURL=/goods.9e1c01d8.js.map