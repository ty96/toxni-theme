;(function () {

  //DOM Operations

  ;(function () {
    var userAgentBox = document.getElementById('userAgent')
    var ipBox = document.getElementById('ip')
    var indexBox = document.getElementById('indexBox')
    var catalog = document.getElementById('catalog')
    var liList = catalog.parentNode.children
    var toggleMenu = document.getElementsByClassName('toggleMenu')[0]
    var userAgentVal = navigator.userAgent
    var ip = window.returnCitySN.cip
    var toTop = document.getElementById('toTop')

    if (!!toggleMenu && window.innerWidth <= 960) {
      toggleMenu.innerHTML = ''
      catalog = document.getElementById('catalog')
      liList = catalog.parentNode.children
    }

    if (!!toTop) {
      toTop.onclick = function () {
        var scroll = setInterval(function () {
          document.body.scrollTop = document.body.scrollTop - 50
          if (document.body.scrollTop <= 0) {
            clearInterval(scroll)
          }
        }, 2)
      }
    }

    if (!!userAgentBox) {
      userAgentBox.innerText = userAgentVal
    }

    if (!!ipBox) {
      document.getElementById("ip").innerText = ip
    }

    if (!!indexBox) {
      indexBox.style.marginTop = '50px'
      indexBox.style.opacity = 1
    }

    if (!!catalog && window.innerWidth <= 640) {
      catalog.onclick = function () {
        if (liList[1].style.display == 'block') {
          for (var i = 1; i < liList.length; i++) {
            liList[i].style.display = 'none'
          }
        }
        else {
          for (var i = 1; i < liList.length; i++) {
            liList[i].style.display = 'block'
          }
        }
      }
    }
  })()

  //Background Canvas

  ;(function bgImage() {
    function A() {
      t.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      t.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }

    function e() {
      o.clearRect(0, 0, t.width, t.height)
      var A = [a].concat(n)
      n.forEach(function (e) {
        e.x += e.xa
        e.y += e.ya
        e.xa *= e.x > t.width || e.x < 0 ? -1 : 1
        e.ya *= e.y > t.height || e.y < 0 ? -1 : 1
        o.fillRect(e.x - .5, e.y - .5, 1, 1)
        for (var i = 0; i < A.length; i++) {
          var n = A[i]
          if (e !== n && null !== n.x && null !== n.y) {
            var r, l = e.x - n.x, s = e.y - n.y, d = l * l + s * s;
            d < n.max && (n === a && d >= n.max / 2 && (e.x -= .03 * l, e.y -= .03 * s), r = (n.max - d) / n.max, o.beginPath(), o.lineWidth = r / 2, o.strokeStyle = "rgba(0,0,0," + (r + .2) + ")", o.moveTo(e.x, e.y), o.lineTo(n.x, n.y), o.stroke())
          }
        }
        A.splice(A.indexOf(e), 1)
      })
      i(e)
    }

    var t = document.getElementById("cas"), o = t.getContext("2d")
    A()
    window.onresize = A
    var i = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (A) {
          window.setTimeout(A, 1e3 / 60)
        }
    }(), a = {x: null, y: null, max: 2e4}
    window.onmousemove = function (A) {
      A = A || window.event, a.x = A.clientX, a.y = A.clientY
    }
    window.onmouseout = function (A) {
      a.x = null, a.y = null
    }
    for (var n = [], r = 0; 100 > r; r++) {
      var l = Math.random() * t.width, s = Math.random() * t.height, d = 2 * Math.random() - 1, c = 2 * Math.random() - 1
      n.push({x: l, y: s, xa: d, ya: c, max: 6e3})
    }
    setTimeout(function () {
      e()
    }, 100)
  })()

  //match userAgent

  ;(function () {
    var OSBox = document.getElementById('OSBox')
    var BSBox = document.getElementById('BSBox')
    var OSImg = document.getElementById('OSImg')
    var BSImg = document.getElementById('BSImg')

    var Systems = ['Windows', 'Android', 'iPad', 'iPhone', 'Mac OS X', 'Ubuntu', 'Linux']
    var Browsers = [ 'Trident', 'MicroMessenger', 'QQ', '360', 'Alipay', 'Edge', 'OPR', 'Chrome', 'Firefox', 'Safari']
    var System = []
    var Browser = []

    var UA = navigator.userAgent
    
    function compare(UA, Result, Arr) {
      Arr.forEach(function (ele) {
        if (!!UA.match(ele) && !Result.length) {
          Result.push(ele)
        }
      })
    }

    compare(UA, System, Systems)
    compare(UA, Browser, Browsers)

    //change name

    if (Browser[0] == 'Trident') {
      Browser[0] = '万恶的 IE'
    }

    if (Browser[0] == 'MicroMessenger') {
      Browser[0] = '微信内置浏览器'
    }

    if (Browser[0] == 'QQ') {
      Browser[0] = 'QQ浏览器'
    }

    if (Browser[0] == '360') {
      Browser[0] = '360浏览器'
    }

    if (Browser[0] == 'Alipay') {
      Browser[0] = '支付宝'
    }

    if (Browser[0] == 'OPR') {
      Browser[0] = 'Opera'
    }

    if (!!OSBox && !!BSBox) {
      OSBox.innerText = System[0]
      BSBox.innerText = Browser[0]
    }
  })()

  //personal info
  ;(function () {
    var content = ''
    var info = personalInfo
    var PIBox = document.getElementById('PIBox')
    if (!!PIBox) {
      document.getElementsByTagName('title')[0].innerText = 'About Me'
      for (var index in info) {
        var temp = '<p><span>' + index +': </span>' + info[index] +'</p>'
        content = content + temp
      }
      PIBox.innerHTML = content
    }
  })()

  //book list
  ;(function () {
    var content = ''
    var books = personalBooks
    var bookBox = document.getElementById('bookBox')
    if (!!bookBox) {
      for (var i = 0; i < books.length; i++) {
        var tempT = '<h3>' + books[i].name +'</h3>'
        var tempI = '<img src="' + books[i].image + '">'
        var tempP = '<p>' + books[i].comment + '</p>'

        if (!books[i].comment) {
          tempP = '<p></p>'
        }

        var temp = '<div>' + tempT + tempI + tempP + '</div>'
        content = content + temp
      }
      bookBox.innerHTML = content
    }
  })()

  //game collection
  ;(function () {
    var content = ''
    var games = personalGames
    var gameBox = document.getElementById('gameBox')
    if (!!gameBox) {
      for (var i = 0; i < games.length; i++) {
        var tempT = '<h3>' + games[i].name +'</h3>'
        var tempI = '<img src="' + games[i].image + '">'
        var tempP = '<p>' + games[i].comment + '</p>'

        if (!games[i].comment) {
          tempP = '<p></p>'
        }

        var temp = '<div>' + tempT + tempI + tempP + '</div>'
        content = content + temp
      }
      gameBox.innerHTML = content
    }
  })()

  //counter
  ;(function (countName, countStart, isShown) {
    var box = document.getElementsByClassName('countDown')[0]
    var countNameBox = document.getElementById('countName')

    if (!countName) {
      countName = 'You can change me and the start time of counter in code ejection'
      countNameBox.innerHTML = countName
    }

    if (!countStart) {
      countStart = 'Mon Jul 20 2015 20:00:00 GMT+0800 (CST)'
    }

    if (!isShown) {
      box.style.display = 'none'
    }

    if (!!box && !!isShown) {
      var day = document.getElementsByClassName('day')[0],
        hour = document.getElementsByClassName('hour')[0],
        minute = document.getElementsByClassName('minute')[0],
        second = document.getElementsByClassName('second')[0]

      var startUpS = new Date(countStart).getTime()

      var timer = function () {
        var now = new Date().getTime()
        var range = parseInt((now - startUpS) / 1000)
        var
          s = range % 60,
          m = ((range - s) / 60) % 60,
          h = ((range - s - m * 60) / 3600) % 24,
          d = ((range - s - m * 60 - h * 3600) / (3600 * 24))

        second.innerText = s
        minute.innerText = m
        hour.innerText = h
        day.innerText = d
      }

      timer()
      setInterval(timer, 1000)
    }
  })(counter.countName, counter.countStart, counter.isShown)

  //invisible style on mobiles
  ;(function () {
    var invisible = document.getElementsByClassName('invisible')

    if (!!invisible.length && window.innerWidth <= 768) {
      for (var i = 0; i < invisible.length; i++) {
        invisible[i].onclick = function () {
          if (this.style.background == 'none') {
            this.style.background = '#888888'
          }
          else {
            this.style.background = 'none'
          }
        }
      }
    }
  })()
})()