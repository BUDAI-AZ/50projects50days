const left = document.querySelector('.split.left')
const right = document.querySelector('.split.right')

const containter = document.querySelector('.containter')

left.addEventListener('mouseenter', () => {
  containter.classList.add('hover-left')
})

left.addEventListener('mouseleave', () => {
  containter.classList.remove('hover-left')
})

right.addEventListener('mouseenter', () => {
  containter.classList.add('hover-right')
})

right.addEventListener('mouseleave', () => {
  containter.classList.remove('hover-right')
})

