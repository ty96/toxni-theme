(function () {
  var userAgentBox = document.getElementById('userAgent')
  var userAgentVal = navigator.userAgent
  var ip = window.returnCitySN.cip

  userAgentBox.innerText = userAgentVal

  document.getElementById("ip").innerText = ip;
})()