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
  var currentSlide = 0;
  var slides = document.querySelectorAll('.swiper-slide');
  
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

  function showSlide(i) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (i + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block'
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  setInterval(nextSlide, 4000);