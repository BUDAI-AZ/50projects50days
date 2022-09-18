const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const btnEl = document.querySelector('.btn')

const days=['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
const months = ['1','2','3','4','5','6','7','8','9','10','11','12']

btnEl.addEventListener('click', (e)=> {
  const html = document.querySelector('html')
  if(html.classList.contains('dark')) {
    html.classList.remove('dark')
    e.target.innerHTML = 'Dart mode'
  } else {
    html.classList.add('dark')
    e.target.innerHTML = 'Light mode'
  }
})

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max-out_min) / (in_max - in_min) + out_min
}

function setTime() {
  const time = new Date()
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hourForClock = hours >= 13? hours % 12: hours

  const seconds = time.getSeconds()
  const minutes = time.getMinutes()
  const ampm = hours >=12? 'PM': 'AM'

  hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hourForClock,0,12,0,360)}deg)`
  minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minutes,0,60,0,360)}deg)`
  secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(seconds,0,60,0,360)}deg)`
  timeEl.innerHTML = `${hourForClock}:${minutes<10?`0${minutes}`:minutes}:${ampm}`
  dateEl.innerHTML = `${months[month]},<span class='circle'>${date}</span>,${days[day]}`
}
setTime()

setInterval(setTime,1000)