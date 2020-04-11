var memory = function () {
  /*
   * First create three buttons display first on the Memory window
   * the user can choose three different sizes of the game board.
   */
  var Mdiv = document.createElement('div')
  Mdiv.className = 'Mdiv'
  var startbutt = document.createElement('button')
  startbutt.className = 'raise'
  var textstart = document.createTextNode('Play 2x2')
  startbutt.appendChild(textstart)
  Mdiv.appendChild(startbutt)

  startbutt.addEventListener('click', function () {
    startbutt.hidden = true
    startbutt2.hidden = true
    startbutt3.hidden = true
    Mdiv.style.width = 190 + 'px'
    Mdiv.style.height = 250 + 'px'

    myMemort(2, 2)
  })

  var startbutt2 = document.createElement('button')
  startbutt2.className = 'raise'
  var textstart2 = document.createTextNode('Play  4x4 ')
  startbutt2.appendChild(textstart2)
  Mdiv.appendChild(startbutt2)

  startbutt2.addEventListener('click', function () {
    startbutt.hidden = true
    startbutt2.hidden = true
    startbutt3.hidden = true
    Mdiv.style.width = 370 + 'px'
    Mdiv.style.height = 440 + 'px'
    myMemort(4, 4)
  })
  var startbutt3 = document.createElement('button')
  startbutt3.className = 'raise'
  var textstart3 = document.createTextNode('Play 6x6')
  startbutt3.appendChild(textstart3)
  Mdiv.appendChild(startbutt3)
  startbutt3.addEventListener('click', function () {
    startbutt.hidden = true
    startbutt2.hidden = true
    startbutt3.hidden = true

    Mdiv.style.width = 540 + 'px'
    Mdiv.style.height = 630 + 'px'

    myMemort(6, 6)
  })
  /**
   * Memory app code
   * @param {*} row
   * @param {*} colums
   */
  function myMemort (row, colums) {
    var path = 'image/memory/'
    var firstClicked
    var secondCliked
    var setimg = row * colums
    var imgarray = []

    for (var i = 0; i < setimg; i++) {
      imgarray[i] = 0
    }
    var place = placeRandomly() // call this method to set image
    var openedIMg = (row * colums) / 2
    var tr
    var td
    var img
    var setimgpath
    var count = 0
    var dropB = document.createElement('button')
    dropB.id = 'dropM'
    var divB = document.createElement('div')
    var inpB = document.createElement('input')
    var btnB = document.createElement('button')
    dropB.setAttribute('class', 'fa fa-id-card')
    dropB.style = 'font-size:15px'
    var txtBt = document.createTextNode('Change')
    var txtNew = document.createTextNode('New username')
    divB.id = 'dropMo'
    inpB.id = 'dropIn'
    inpB.setAttribute('maxlength', 15)
    btnB.id = 'btnB'
    btnB.appendChild(txtBt)
    divB.appendChild(txtNew)
    divB.appendChild(inpB)
    divB.appendChild(btnB)
    var username
    Mdiv.appendChild(dropB)
    dropB.addEventListener('click', function () {
      Mdiv.appendChild(divB)
      btnB.addEventListener('click', function () {
        if (document.getElementById('dropIn').value.length > 0) {
          username = document.getElementById('dropIn').value
          Mdiv.removeChild(divB)
        } else {
          Mdiv.removeChild(divB)
        }
      })
    })
    var Imgtabel = document.createElement('table')
    Imgtabel.setAttribute('tabindex', 1)
    Imgtabel.className = 'memory'
    var k = 0
    var j = 0
    while (k < row) {
      k++
      tr = document.createElement('tr')
      for (j = 0; j < colums; j++) {
        td = document.createElement('td')
        tr.focus()
        tr.setAttribute('class', 'table-info')
        td.setAttribute('colspan', 7)
        td.focus()
        Imgtabel.focus()
        setimgpath = document.createElement('a')
        setimgpath.id = count++
        setimgpath.focus()
        var firstImg
        setimgpath.addEventListener('keyup', function (event) {
          if (event.which === 13) {
            if (secondCliked) {
              return false
            } else if (firstClicked && firstClicked !== this) {
              secondCliked = this
              count++
            } else {
              firstClicked = this
              firstImg = event.target
            }
            this.firstChild.src = path + place[this.id] + '.jpg'
            if (secondCliked) {
              if (place[secondCliked.id] === place[firstClicked.id]) {
                event.target.hidden = true
                firstImg.hidden = true
                openedIMg--
                firstClicked = null
                secondCliked = null
              } else {
                var nana = document.createElement('img')
                nana.setAttribute('src', 'image/memory/bad.png')
                Mdiv.appendChild(nana)
                nana.id = 'bad'
                window.setTimeout(function () { // if the images are not equal flip back quostion img after one second
                  firstClicked.firstChild.src = path + 'qq' + '.jpg'
                  firstClicked = null
                  secondCliked.firstChild.src = path + 'qq' + '.jpg'
                  secondCliked = null
                  Mdiv.removeChild(nana)
                }, 1100)
              }
            }
            /* if the user get all img equal then display text the the number of truns that the user done
            * and if the user Enter his/her name than show it
             */
            if (openedIMg === 0) {
              var win = document.createElement('h2')
              Mdiv.removeChild(dropB)
              var text
              if (username === undefined) {
                text = document.createTextNode(' You Won :) ' + 'total turns are ' + count)
              } else {
                text = document.createTextNode(username + ' You Won :) ' + 'total turns are ' + count)
              }
              win.appendChild(text)
              win.className = 'win'
              Imgtabel.hidden = true
              Mdiv.appendChild(win)
            }

            return false
          }
        })
        img = document.createElement('img')
        img.src = path + 'qq.jpg'
        img.setAttribute('tabindex', 1)
        setimgpath.appendChild(img)
        img.focus()
        td.appendChild(setimgpath)
        tr.appendChild(td)
      }
      Imgtabel.appendChild(tr)
      Imgtabel.focus()
    }
    Mdiv.appendChild(Imgtabel)
    function placeRandomly () {
      var count = 1
      while (count <= setimg / 2) {
        count++
        var first = false
        var second = false
        while (first === false || second === false) {
          var rd = Math.floor((Math.random() * setimg))
          if (first === false) {
            if (imgarray[rd] === 0) {
              imgarray[rd] = count
              first = true
            }
          }
          if (second === false) {
            if (imgarray[rd] === 0) {
              imgarray[rd] = count
              second = true
            }
          }
        }
      }
      return imgarray
    }
  }
  return Mdiv
}
export default memory
