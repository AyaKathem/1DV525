var username
var chatapp = function () {
  var sst = document.createElement('div')
  sst.id = 'chat'
  var start = document.createElement('div')
  start.id = 'start'
  var userbutton = document.createElement('button')
  userbutton.id = 'userbt'
  var usernamein = document.createElement('input')
  usernamein.id = 'username'
  usernamein.setAttribute('maxlength', 15)
  var namewindow = document.createElement('div')
  namewindow.className = 'namewindow'
  var textarea = document.createElement('textarea')
  textarea.id = 'absolute'
  var textbox = document.createElement('div')
  textbox.id = 'textbox'
  textbox.style = 'overflow:auto'
  textbox.scrollTop = textbox.scrollHeight
  var sendbt = document.createElement('button')
  sendbt.id = 'send'
  var txt = document.createTextNode('Enter your username: ')
  txt.id = 'name2'
  var dropB = document.createElement('button')
  dropB.id = 'drop'
  var divB = document.createElement('div')
  var inpB = document.createElement('input')
  var btnB = document.createElement('button')
  dropB.setAttribute('class', 'fa fa-id-card')
  dropB.style = 'font-size:15px'
  var txtBt = document.createTextNode('Change')
  var txtNew = document.createTextNode('New username')
  divB.id = 'dropD'
  inpB.id = 'dropIn'
  inpB.setAttribute('maxlength', 15)
  btnB.id = 'btnB'
  btnB.appendChild(txtBt)
  divB.appendChild(txtNew)
  divB.appendChild(inpB)
  divB.appendChild(btnB)
  dropB.addEventListener('click', function () {
    sst.appendChild(divB)
    btnB.addEventListener('click', function () {
      if (document.getElementById('dropIn').value.length > 1) {
        username = document.getElementById('dropIn').value
        sst.removeChild(divB)
      } else {
        sst.removeChild(divB)
      }
    })
  })
  var txt1 = document.createTextNode('send')
  var txt2 = document.createTextNode('Enter the chat')
  userbutton.appendChild(txt2)
  sendbt.appendChild(txt1)
  namewindow.appendChild(txt)
  namewindow.appendChild(usernamein)
  namewindow.appendChild(userbutton)
  sst.appendChild(namewindow)
  if (username !== undefined && username.length > 1) {
    sst.removeChild(namewindow)
    sst.appendChild(dropB)
    sst.appendChild(textbox)
    sst.appendChild(textarea)
    sst.appendChild(sendbt)
    score()
  }
  if (userbutton !== undefined) {
    userbutton.addEventListener('click', function () {
      username = document.getElementById('username').value
      console.log(username.length)
      if (username.length > 1) {
        sst.removeChild(namewindow)
        sst.appendChild(dropB)
        sst.appendChild(textbox)
        sst.appendChild(textarea)
        sst.appendChild(sendbt)
        score()
      }
    })
  }
  const socket = new window.WebSocket('ws://vhost3.lnu.se:20080/socket/')
  const inputText = document.createElement('input')
  inputText.setAttribute('type', 'text')
  socket.addEventListener('open', (event) => {
    console.log('Socket is open')
  })
  sendbt.addEventListener('click', (event) => {
    if (textarea.value.length > 0) {
      socket.send(JSON.stringify(
        {
          'type': 'message',
          'data': textarea.value,
          'username': username,
          'channel': 'my, not so secret, channel',
          'key': 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd'
        }
      ))
      textarea.value = ''
    }
  })
  var num = 0
  socket.addEventListener('message', (event) => {
    const data = JSON.parse(event.data)

    if (data.type === 'message') {
      var ms = document.createTextNode(data.username + ': ' + data.data)
      ms.id = 'messages'
      textbox.appendChild(ms)
      var space = document.createElement('br')
      textbox.appendChild(space)
      if (typeof (Storage) !== 'undefined') {
        window.localStorage.setItem(num++, [data.username + ':' + data.data])
      }
    }
  })
  function score () {
    var archive = {}
    var keys = Object.keys(window.localStorage)

    var i
    for (i = window.localStorage.length - 1; i >= 0; i--) {
      archive[keys[i]] = window.localStorage.getItem(keys[i])
      var space = document.createElement('br')
      var textno = document.createTextNode(archive[keys[i]])
      textbox.appendChild(textno)
      textbox.appendChild(space)
    }
  }
  return sst
}
export default chatapp
