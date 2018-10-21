
var quiz = function () {
  console.log('qize')
  function hiddenqize () {
    document.getElementById('list').hidden = true
  }

  hiddenqize()
  function iFunction () {
    var username = document.getElementById('username').value
    var age = document.getElementById('age').value
    if (username === 0 || age === 0) {
      console.log('Please enter your name and your age')
    } else {
      document.getElementById('nextbutton1').hidden = false
      document.getElementById('nextbutton').hidden = false
    }
  }

  iFunction()
  function loadDoc () {
    var xhttp = new XMLHttpRequest()

    xhttp.addEventListener('load', function () {
      if (this.readyState === 4 && this.status === 200) {
        var parsed = JSON.parse(this.responseText)
        if (parsed.alternatives === undefined) {
          document.getElementById('answare').hidden = false

          document.getElementById('demo').innerHTML = parsed.question
          document.getElementById('answare').innerHTML = 'enter'
          // var x = document.getElementById('answare').value
        } else {
          document.getElementById('list').hidden = false
          let inputFormTemplate = document.getElementsByName('Salary')
          let theForm = inputFormTemplate.content.firstElementChild
          theForm.firstElementChild.textContent = parsed.question
          let template = document.importNode(inputFormTemplate.content, true)
          document.getElementsByName('Salary').appendChild(template)
        }
      }
    })

    xhttp.open('GET', 'http://vhost3.lnu.se:20080/question/1', true)
    xhttp.send()
  }
  loadDoc()
  loadDoc2()
  function loadDoc2 () {
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', function () {
      if (xhr.status > 400) {
        var userInfo = JSON.parse(xhr.responseText)
        alert('Something went wrong.  Name is now ' + xhr.responseText + userInfo)
      }
    })
    xhr.open('POST', 'http://vhost3.lnu.se:20080/question/1')
    xhr.setRequestHeader('Content-Type', 'application/JSON')
    xhr.send(JSON.stringify([{answer: '2'}]))
  }
}

module.exports = quiz
