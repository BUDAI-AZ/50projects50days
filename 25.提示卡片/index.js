const btn = document.querySelector('.btn')
const cards = document.querySelector('.cards')

const message = [
  '信息1',
  '信息2',
  '信息3',
  '信息4',
  '信息5'
]

const types = ['info','success', 'error']

btn.addEventListener('click', ()=> {
  createNofification()
})

function createNofification(message = null, type = null) {
  const notify = document.createElement('div')
  notify.classList.add('card')
  notify.classList.add(type ? type: getRandomType())
  notify.innerHTML = message? message: getRandomMessage()
  cards.appendChild(notify)
}

function getRandomType() {
  return types[Math.floor(Math.random()*types.length)]
}

function getRandomMessage() {
  return message[Math.floor(Math.random()*message.length)]
}