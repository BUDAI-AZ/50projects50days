const slides = document.querySelectorAll('.slide')

const body = document.querySelector('body')
const leftBtn = document.querySelector('#left')
const rightBtn = document.querySelector('#right')

let activeSilde = 0
setBgToBody()

rightBtn.addEventListener('click', () => {
  activeSilde++
  if(activeSilde >= slides.length - 1) {
    activeSilde = 0
  }
  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSilde--
  if(activeSilde < 0) {
    activeSilde = slides.length-1
  }
  setBgToBody()
  setActiveSlide()
})

function setBgToBody() {
  body.style.backgroundImage = slides[activeSilde].style.backgroundImage
}


function setActiveSlide() {
  slides.forEach(slider => slider.classList.remove('active'))
  slides[activeSilde].classList.add('active')
}

