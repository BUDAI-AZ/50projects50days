const title = document.querySelector('#title')
const header = document.querySelector('#header')
const excerpt = document.querySelector('#excerpt')
const profile_img = document.querySelector('#profile_img')
const name = document.querySelector('#name')
const date = document.querySelector('#date')
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelector('.animated-bg-text')

getDate()
function getDate() {
  header.innerHTML = `<img src="../img/3.jpg" />`
  title.innerHTML = '自传'
  excerpt.innerHTML = '喜欢吃饭的人'
  profile_img.innerHTML = `<img src="../img/1.jpg" />`
  name.innerHTML = '千亩'
  date.innerHTML = '2022.07.07'
  animated_bgs.forEach(bg => {
    bg.classList.remove('animated-bg')
  })
  animated_bg_texts.forEach(bg => {
    bg.classList.remove('animated-bg-text')
  })
}
