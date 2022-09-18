const open1 = document.querySelector('.open')
const close1 = document.querySelector('.close')
const containter = document.querySelector('.containter')

open1.addEventListener('click',() => {
  containter.classList.add('show_nav')
})
close1.addEventListener('click',() => {
  containter.classList.remove('show_nav')
})