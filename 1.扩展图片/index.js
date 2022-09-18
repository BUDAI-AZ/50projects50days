const panels = document.querySelectorAll('.panel')// 获取panel节点

// 添加点击事件
panels.forEach(item => {
  item.addEventListener('click',() => {
    removeActiveClass()
    item.classList.add('active')
  })
})

// 移除active类
function removeActiveClass() {
  panels.forEach(item => {
    item.classList.remove('active')
  })
}