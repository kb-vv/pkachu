import string from './css'
const player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.getElementById('demo'),
    demo2: document.getElementById('demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnSlow': 'slow',
    '#btnMiddle': 'middle',
    '#btnFast': 'fast',
    '#btnPlay': 'play',
  },
  n: 1,
  init: () => {
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.bindEvents()//初始化就绑定事件
    player.play()//获得初始化定时器的id
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  run: () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight
  },
  play: () => {
    window.clearInterval(player.id)
    player.id = setInterval(player.run, player.time)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  slow: () => {
    player.pause()
    player.time = 500
    player.play()
  },
  middle: () => {
    player.pause()
    player.time = 100
    player.play()
  },
  fast: () => {
    player.pause()
    player.time = 0
    player.play()
  }
}
player.init()

/*
let n = 0
let time = 80
const run = () => {
  n += 1
  if (n > string.length) {
    clearInterval(id)
    return
  }
  demo.innerText = string.substr(0, n)
  demo2.innerHTML = string.substr(0, n)
  demo.scrollTop = demo.scrollHeight
}
const play = () => {
  return setInterval(run, time)
}
const pause = () => {
  window.clearInterval(id)
}
let id = play()
btnPause.onclick = () => {
  pause()
}
btnPlay.onclick = () => {
  id = play()
}
btnSlow.onclick = () => {
  pause()
  time = 100
  id = play()
}
btnMiddle.onclick = () => {
  pause()
  time = 50
  id = play()
}
btnFast.onclick = () => {
  pause()
  time = 10
  id = play()
}*/
