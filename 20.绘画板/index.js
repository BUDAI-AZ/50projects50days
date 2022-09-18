const canvas = document.querySelector('#canvas')
const increaseBtn = document.querySelector('.increase')
const decreaseBtn = document.querySelector('.decrease')
const sizeEl = document.querySelector('#size')
const colorEl = document.querySelector('#color')
const clearBtn = document.querySelector('#clear')

const ctx = canvas.getContext('2d')

let size = 2

let isPress = false
colorEl.value = 'black'
let color = colorEl
let x
let y

canvas.addEventListener('mousedown', (e) => {
  isPress = true
  x = e.offsetX
  y = e.offsetY
})

document.addEventListener('mouseup', (e) => {
  isPress = false
  x = undefined
  y = undefined
})

canvas.addEventListener('mousemove', (e) => {
  if(isPress) {
    const x2 = e.offsetX
    const y2 = e.offsetY
    drawCircle(x2,y2)
    drawLine(x,y,x2,y2)
    x = x2
    y = y2
  }
})


function drawCircle(x,y) {
  ctx.beginPath()
  ctx.arc(x,y,size,0,Math.PI*2)
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x1,y1,x2,y2) {
  ctx.beginPath()
  ctx.moveTo(x1,y1)
  ctx.lineTo(x2,y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size*2
  ctx.stroke()
}

function updayeSizeOnScreen() {
  sizeEl.innerHTML = size
}

increaseBtn.addEventListener('click', () => {
  size += 1
  if(size > 50) {
    size = 50
  }
  updayeSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
  size -= 1
  if(size < 1) {
    size = 1
  }
  updayeSizeOnScreen()
})

colorEl.addEventListener('change', (e) => color = e.target.value)
clearBtn.addEventListener('click', (e) => ctx.clearRect(0,0,canvas.width,canvas.height))




