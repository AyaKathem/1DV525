var gussApp = function () {
  var Gdiv = document.createElement('div')
  Gdiv.className = 'Gdiv'
  var x = Math.floor((Math.random() * 100) + 1)
  var input = document.createElement('input')
  input.id = 'Ginput'
  input.setAttribute('maxlength', 3)
  input.setAttribute('pattern', '[0-9.]+')
  input.setAttribute('type', 'number')
  var Gbtn = document.createElement('button')
  Gbtn.className = 'Gbtn'
  var Gtext = document.createTextNode('Guess')
  Gbtn.appendChild(Gtext)
  var Gtext2 = document.createElement('h3')
  Gtext2.className = 'tex'
  Gbtn.addEventListener('click', function () {
    var num = input.value
    if (num < x) {
      var answer = document.createTextNode('The number is too low')
      Gtext2.appendChild(answer)
      Gdiv.appendChild(Gtext2)
      window.setTimeout(function () {
        Gtext2.removeChild(answer)
        Gdiv.removeChild(Gtext2)
      }, 1000)
    } else if (num > x) {
      var answer2 = document.createTextNode('The number is too high')
      Gtext2.appendChild(answer2)
      Gdiv.appendChild(Gtext2)
      window.setTimeout(function () {
        Gtext2.removeChild(answer2)
        Gdiv.removeChild(Gtext2)
      }, 1000)
    } else {
      Gbtn.hidden = true
      var img = document.createElement('img')
      img.id = 'good'
      img.setAttribute('src', 'image/memory/good.png')
      Gdiv.appendChild(img)
    }
  })
  Gdiv.appendChild(input)
  Gdiv.appendChild(Gbtn)
  return Gdiv
}
export default gussApp
