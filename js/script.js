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
    
  });

//   aos

  AOS.init({
    duration: 1000,
    once: true,
    
  });
