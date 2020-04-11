var PWD = function () {
  var chatApp = require('./chatApp').default
  var memory = require('./memory').default
  var GussNumber = require('./GussNumber').default
  const btn = document.getElementById('app1')
  const btn2 = document.getElementById('app2')
  const btn3 = document.getElementById('app3')
  var cu = 0
  btn.addEventListener('click', function () {
    const div = document.createElement('div')
    div.className = 'draggable'
    div.setAttribute('tabindex', 1)
    var icon = document.createElement('i')
    icon.setAttribute('class', 'fa fa-wechat')
    icon.id = 'iconB'
    var close1 = document.createElement('button')
    close1.className = 'closeB'
    var texB = document.createTextNode('X')
    close1.appendChild(texB)
    div.appendChild(icon)
    div.appendChild(close1)
    div.appendChild(chatApp())
    placeDiv(div)

    div.addEventListener('mousedown', mouseDown, false)
    close1.addEventListener('click', function () {
      document.body.removeChild(div)
    })
  })
  btn2.addEventListener('click', function () {
    const div = document.createElement('div')
    div.className = 'draggable'
    div.setAttribute('tabindex', 1)
    var close1 = document.createElement('button')
    close1.className = 'closeB'
    var icon = document.createElement('i')
    icon.setAttribute('class', 'fa fa-gamepad')
    icon.id = 'iconB'
    var texB = document.createTextNode('X')
    close1.appendChild(texB)

    div.appendChild(icon)
    div.appendChild(close1)

    div.appendChild(memory())
    placeDiv(div)

    div.addEventListener('mousedown', mouseDown, false)
    close1.addEventListener('click', function () {
      document.body.removeChild(div)
    })
  })
  btn3.addEventListener('click', function () {
    const div = document.createElement('div')
    div.className = 'draggable'
    div.setAttribute('tabindex', 1)

    var close1 = document.createElement('button')
    close1.className = 'closeB'
    var icon = document.createElement('i')
    icon.setAttribute('class', 'fa fa-th')
    icon.id = 'iconB'
    var texB = document.createTextNode('X')
    close1.appendChild(texB)
    div.appendChild(icon)
    div.appendChild(close1)
    div.appendChild(GussNumber())
    placeDiv(div)

    div.addEventListener('mousedown', mouseDown, false)
    close1.addEventListener('click', function () {
      document.body.removeChild(div)
    })
  })
  function mouseUp () {
    this.removeEventListener('mousemove', move, true)
  }

  function mouseDown (e) {
    this.style.zIndex = cu++
    this.addEventListener('mousemove', move, true)
    this.addEventListener('mouseup', mouseUp, true)
  }

  function move (e) {
    this.style.top = e.clientY - (this.clientHeight / 2) + 'px'
    this.style.left = e.clientX - (this.clientWidth / 2) + 'px'
  }
  var top
  var num
  function placeDiv (innerDiv) {
    if (top > 310) {
      num = 400
      top = 10

      innerDiv.style.position = 'fixed'
      innerDiv.style.top = top + 10 + 'px'
      innerDiv.style.left = num + 10 + 'px'
      document.body.appendChild(innerDiv)
    } else if (num > 780) {
      num = 40
      top = 10
      innerDiv.style.position = 'fixed'
      innerDiv.style.top = top + 20 + 'px'
      innerDiv.style.left = num + 10 + 'px'
      document.body.appendChild(innerDiv)
    } else {
      innerDiv.style.position = 'fixed'
      innerDiv.style.left = num + 30 + 'px'
      innerDiv.style.top = top + 20 + 'px'
      document.body.appendChild(innerDiv)
    }
    num = innerDiv.offsetLeft
    top = innerDiv.offsetTop
  }
}
module.exports = PWD
