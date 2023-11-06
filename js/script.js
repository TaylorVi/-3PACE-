let callUs = document.querySelector('#callUs')
let btnIcon = document.querySelector('.btn-icon')


btnIcon.addEventListener('mouseover', function() {
    callUs.innerHTML = `<img src="/assets/Call Us White.svg" alt="">`
})

btnIcon.addEventListener('mouseout', function() {
    callUs.innerHTML = `<img src="/assets/Call Us.svg" alt="">`
})