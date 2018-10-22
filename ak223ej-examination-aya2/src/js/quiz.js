
var quiz = function () {
  document.getElementById('end').hidden = true
  document.getElementById('answare').hidden = true
  document.getElementById('form').hidden = true
  document.getElementById('quiz').hidden = true
  document.getElementById('startbutton').disabled = false
  let isCounting = true
  let countSec = 0
  let timerdown = false
  let ti = 0
  var num = 0
  var check
  var btn = document.createElement('BUTTON')
  var btn1 = document.createElement('BUTTON')
  var btn2 = document.createElement('BUTTON')
  var btn3 = document.createElement('BUTTON')
  var form = document.getElementById('form')
  /// /////////////////////////////////////////////////////////
  /// number to control the time, if the time end = 0 the quiz end
  /// the begin ()start the time
  /// pause() to pass the time
  /// the resum () get first to stoped time the resume the timer
  /// /////////////////////////////////////////////////////////
  function begin () {
    countSec = 20
    if (isNaN(countSec)) alert('NaN')
    count()
  }
  function pause () {
    isCounting = false
    console.log(countSec)
  }
  function resume () {
    ti = countSec + ti

    isCounting = true
  }

  function count () {
    if (timerdown) {
      clearInterval(timerdown)
    }

    timerdown = setInterval(function () {
      if (isCounting) {
        document.getElementById('timer').innerHTML = countSec
        countSec -= 1

        if (countSec === -1) {
          clearInterval(timerdown)
          timerdown = null
        } else if (countSec === 0) {
          document.getElementById('startbutton').disabled = true
          document.getElementById('quiz').hidden = true
          document.getElementById('end').hidden = false
          document.getElementById('totalsecond').innerHTML = ti
        }
      }
    }, 1000)
  }
  var username
  /// ///////////////////////////////////////////////////////////
  document.getElementById('startbutton').addEventListener('click', function () {
    username = document.getElementById('usernamein').value
    var age = document.getElementById('agein').value

    if (username.length === 0 || age.length === 0) {
      document.getElementById('alert').innerHTML = 'Please fill the empty fields to start the game'
    } else {
      document.getElementById('quiz').hidden = false
      parisURL = 'http://vhost3.lnu.se:20080/question/1'
      get(parisURL)
      begin()
    }
  })
  /// ////////////////////////////////////////////////////////////
  var nexturl
  var getAnswer
  var parsed
  var parisURL = 'http://vhost3.lnu.se:20080/question/1'
  var answerParse
/// ///////////////////////////////////////////////////////////////
///  Get method which get the qustion by using promeses and xmlHTTPrequst
/// //////////////////////////////////////////////////////////////
  function get (url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', url)
      xhr.onload = function () {
        parsed = JSON.parse(this.responseText)

        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.response))

          document.getElementById('demo1').innerHTML = parsed.question
          nexturl = parsed.nextURL

          if (parsed.alternatives === undefined) {
            document.getElementById('answare').hidden = false
            document.getElementById('form').hidden = true
            getAnswer = JSON.stringify({answer: document.getElementById('answare').value})
          } else {
            document.getElementById('answare').hidden = true
            document.getElementById('form').hidden = false
            alternativesButton()
            getAnswer = JSON.stringify({answer: check})
          }
        } else {
          reject(Error(xhr.statusText))
        }
      }
      xhr.onerror = function () {
        reject(Error('Network Error'))
      }
      xhr.send()
    })
  }
  /// ///////////////////////////////////////////////////////////////
///  POST method which send the answer by using promeses and xmlHTTPrequst
// if the answer is wrong the quiz ending and display the total time
/// //////////////////////////////////////////////////////////////

  function POST (url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest()
      xhr.open('POST', url)
      xhr.setRequestHeader('Content-Type', 'application/JSON')
      xhr.onload = function () {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.response))
          answerParse = JSON.parse(this.responseText)
        } else if (xhr.status === 400) {
          pause()
          reject(Error(xhr.statusText))
          document.getElementById('startbutton').disabled = true
          document.getElementById('quiz').hidden = true
          document.getElementById('end').hidden = false
          document.getElementById('totalsecond').innerHTML = ti
        }
      }
      xhr.onerror = function () {
        reject(Error('Network Error'))
      }
      xhr.send(getAnswer)
    })
  }
  /// ////////////////////////////////////////////////////////////
  // evenlistener for restart button
  /// ///////////////////////////////////////////////////////////
  document.getElementById('restart').addEventListener('click', function () {
    ti = 0
    resume()
    begin()
    document.getElementById('end').hidden = true
    document.getElementById('quiz').hidden = false
    parisURL = 'http://vhost3.lnu.se:20080/question/1'
    get(parisURL)
  })
  document.getElementById('get').addEventListener('click', function () {
    get(parisURL).then(function (response) {
      console.log('Vanilla Javascript success!')
      nexturl = parsed.nextURL

      if (getAnswer.length > 13) {
        pause()
        POST(nexturl).then(function (response) {
          console.log('Vanilla Javascript success!')
          parisURL = answerParse.nextURL

          if (answerParse.nextURL !== undefined) {
            resume()
            begin()
            document.getElementById('answare').value = ''
            get(parisURL)
          } else {
            if (typeof (Storage) !== 'undefined') {
              num++
              localStorage.setItem(username, JSON.stringify(' ' + ti))
            }
            document.getElementById('startbutton').disabled = true
            document.getElementById('quiz').hidden = true
            document.getElementById('end').hidden = false
            document.getElementById('totalsecond').innerHTML = ti
            score()
          }
        }, function (error) {
          console.error('Vanilla Javascript failed!', error)
        })
      }
    }, function (error) {
      console.error('Vanilla Javascript failed!', error)
    })
  })
  /// ////////////////////////////////////////////////////////////
  // A Method for alternatives quotions i used button when the user click on
  // the button the answer will store in check varibles and then the user click
  // Son Next on button to check the answer an go to the next qustion
  /// ////////////////////////////////////////////////////////

  function alternativesButton () {
    btn.setAttribute('id', 'b')

    document.getElementById('ans1').innerHTML = parsed.alternatives.alt1
    var t = document.getElementById('ans1')
    btn.appendChild(t)
    form.appendChild(btn)
    document.getElementById('b').addEventListener('click', function () {
      check = 'alt1'
    })

    btn1.setAttribute('id', 'b1')
    document.getElementById('ans2').innerHTML = parsed.alternatives.alt2
    var t1 = document.getElementById('ans2')

    btn1.appendChild(t1)
    form.appendChild(btn1)
    document.getElementById('b1').addEventListener('click', function () {
      check = 'alt2'
    })

    btn2.setAttribute('id', 'b2')
    document.getElementById('ans3').innerHTML = parsed.alternatives.alt3
    var t2 = document.getElementById('ans3')
    btn2.appendChild(t2)
    form.appendChild(btn2)

    document.getElementById('b2').addEventListener('click', function () {
      check = 'alt3'
    })
    btn3.setAttribute('id', 'b3')
    form.appendChild(btn3)

    if (parsed.alternatives.alt4 === undefined) {
      document.getElementById('b3').hidden = true
    } else if (parsed.alternatives.alt4 !== undefined) {
      document.getElementById('b3').hidden = false

      document.getElementById('ans4').innerHTML = parsed.alternatives.alt4
      var t3 = document.getElementById('ans4')
      btn3.appendChild(t3)

      document.getElementById('b3').addEventListener('click', function () {
        check = 'alt4'
        console.log(check)
      })
    }
  }
  /// //////////////////////////////////////////////
  // Methd to get the store score in local storage
  /// ////////////////////////////////////////////////
  var addsoc = document.getElementById('end')
  var t = document.createTextNode('Last five score')

  function score () {
    addsoc.appendChild(t)
    var archive = {} // Notice change here
    var keys = Object.keys(localStorage)
    var i
    if (localStorage.length < 5) {
      i = localStorage.length
    } else {
      i = 5
    }
    while (i--) {
      archive[ keys[i] ] = localStorage.getItem(keys[i])
      var space = document.createElement('br')
      var textno = document.createTextNode(localStorage.key(i) + archive[ keys[i] ])
      addsoc.appendChild(textno)
      addsoc.appendChild(space)
    }
  }
}

module.exports = quiz
