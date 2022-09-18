const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('.times')

let clickTime = 0
let timesClick = 0

loveMe.addEventListener('click',(e) => {
  if(clickTime === 0) {
    clickTime = new Date().getTime()
  } else {
    if(new Date().getTime() - clickTime < 800) {
      createHeart(e)
      clickTime = 0
    } else {
      clickTime = new Date().getTime()
    }
  }
})

function createHeart(e) {
  const heart = document.createElement('i')
  heart.classList.add('icon')

  const x = e.clientX
  const y = e.clientY

  const letOffset = e.target.offsetLeft
  const topOffset = e.target.offsetTop

  const xinside = x - letOffset
  const yinside = y - topOffset

  heart.style.top = `${yinside}px`
  heart.style.left = `${xinside}px`

  times.innerHTML = ++timesClick
  loveMe.appendChild(heart)

  setTimeout(()=> {
    heart.remove()
  },1000)
}