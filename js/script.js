let callUs = document.querySelector('#callUs')
let btnIcon = document.querySelector('.btn-icon')


btnIcon.addEventListener('mouseover', function() {
    callUs.innerHTML = `<img src="/assets/Call Us White.svg" alt="">`
})

btnIcon.addEventListener('mouseout', function() {
    callUs.innerHTML = `<img src="/assets/Call Us.svg" alt="">`
})


// swiper

var swiper = new Swiper('.swiper', {
    slidesPerView: 3.2,
    spaceBetween: 52,
    speed: 800,
    pagination:{
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      420: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2.4,
      },
      991: {
        slidesPerView: 3.2,
      },
      1200: {
        slidesPerView: 3.2,
      },
      1440: {
        slidesPerView: 3.2,
      },
    }
    
  });

//   aos

  AOS.init({
    duration: 1000,
    once: true,
    
  });
