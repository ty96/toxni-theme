(function () {
  var box = document.getElementsByClassName('countDown')[0];
  if (!!box) {
    box.style.marginTop = window.innerHeight / 2 - 72 + 'px';

    var
      day = document.getElementsByClassName('day')[0],
      hour = document.getElementsByClassName('hour')[0],
      minute = document.getElementsByClassName('minute')[0],
      second = document.getElementsByClassName('second')[0];

    var startUp = 'Mon Jul 20 2015 20:00:00 GMT+0800 (CST)';
    var startUpS = new Date(startUp).getTime();

    var timer = function () {
      var now = new Date().getTime();
      var range = parseInt((now - startUpS) / 1000);
      var
        s = range % 60,
        m = ((range - s) / 60) % 60,
        h = ((range - s - m * 60) / 3600) % 24,
        d = ((range - s - m * 60 - h * 3600) / (3600 * 24));

      second.innerText = s;
      minute.innerText = m;
      hour.innerText = h;
      day.innerText = d;
    };

    timer();
    setInterval(timer, 1000)
  }
})();