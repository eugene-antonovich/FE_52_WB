const headerLogo = document.getElementById('header-logo');
const input = document.getElementById('search');
const dropdown = document.getElementById('dropdown');
const camera = document.getElementById('camera');
const searchPhoto = document.getElementById('search-photo');
const glass = document.getElementById('glass');
const basket = document.getElementById('basket');
const swiperSection = document.getElementsByClassName('swiper-section');
const goodsSection = document.getElementById('goods');
const basketSection = document.getElementById('basket-section');

camera.addEventListener('mouseover', cameraActive);

camera.addEventListener('mouseout', cameraNotActive);

input.addEventListener('click', searchColor);

input.addEventListener('click', drop);

document.body.addEventListener('click', function(event) {
    if(event.target !== input && event.target !== dropdown) {
        dropdown.style.display = 'none';
        input.classList.remove('search-active');
        glass.style.color = '';
        glass.style.zIndex = '';
        camera.style.color = '';
        camera.style.zIndex = '';
    }
})

headerLogo.addEventListener('click', function() {
    location.reload();
})

function drop() {
    dropdown.style.display = 'block';
}

function searchColor() {
    input.classList.add('search-active');
    glass.style.color = 'gray';
    glass.style.zIndex = '4';
    camera.style.color = 'gray';
    camera.style.zIndex = '4';
}

function cameraActive() {
    searchPhoto.style.display = 'block';
}

function cameraNotActive() {
    searchPhoto.style.display = 'none';
}
