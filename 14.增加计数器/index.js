const counters = document.querySelectorAll('.counter')


counters.forEach(item => {
  item.innerHTML = '0'
  const updateCounter = () => {
    const target = +item.getAttribute('data-target')
    const c = +item.innerText
    const increment = target / 200
    if(c < target) {
      item.innerText = `${Math.ceil(c+increment)}`
      setTimeout(updateCounter, 10)
    } else {
      item.innerText = target
    } 
  }
  updateCounter()
});
