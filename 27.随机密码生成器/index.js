const resultEl = document.querySelector('#result')
const lengthEl = document.querySelector('#length')
const uppercaseEl = document.querySelector('#uppercase')
const lowercaseEl = document.querySelector('#lowercase')
const numbersEl = document.querySelector('#numbers')
const symbolsEl = document.querySelector('#symbols')
const generateBtn = document.querySelector('#generate')
const clipboardBtn = document.querySelector('#clipboard')

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

clipboardBtn.addEventListener('click', () => {
  const textarea = document.createElement('textarea')
  const password = resultEl.innerText
  if(!password) return
  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
})

generateBtn.addEventListener('click', () => {
  const length = lengthEl.value
  const hasLower = lowercaseEl.checked
  const hasUpper = uppercaseEl.checked

  const hasNumber = numbersEl.checked
  const hasSymbol = symbolsEl.checked

  resultEl.innerHTML = generatePassword(hasLower,hasUpper,hasNumber,hasSymbol,length)
})

function generatePassword(lower,upper,number,symbol,length) {
  let generatePassword = ''
  const typesCount = lower + upper + number + symbol
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => {
    return Object.values(item)[0]
  })

  if(typesCount === 0) {
    return ''
  }

  for(let i = 0; i < length; i+=typesCount) {
    typesArr.forEach(item => {
      const funcName = Object.keys(item)[0]
      generatePassword += randomFunc[funcName]()

    })
  }
  const finalPassword = generatePassword.slice(0,length)
  return finalPassword
}



function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()*26) + 97)
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26) + 65)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random()*10) + 48)
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*()=<>/,.'
  return symbols[Math.floor(Math.random()*symbols.length)]
}