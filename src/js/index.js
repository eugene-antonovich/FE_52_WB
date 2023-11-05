let localStoragePromise = JSON.parse(localStorage.getItem('promise'));

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

  function promise(item) {
    for(let i = 0; i < item.length; i++) {
        item[i].id =  generateId();
      
      createCard(
        item[i].img,
        item[i].price,
        item[i].price2,
        item[i].name,
        item[i].product,
        item[i].delivery,
        item[i].id)
    }
    }

export {localStoragePromise, generateId, generateRatings, getRandomRating, promise}

