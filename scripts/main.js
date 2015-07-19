window.times = 0

window.start = function() {
  document.getElementById("a").src = "images/jiandao.jpg"
  document.getElementById("b").src = "images/shitou.jpg"
  document.getElementById("c").src = "images/bu.jpg"
  var oneClick = document.getElementById("b")
  oneClick.style.display = "block"
  var oneClick = document.getElementById("shuying")
  oneClick.style.display = "none"
}

window.shitou = function(aaa) {
  var oneClick = document.getElementById("shuying")
  oneClick.style.display = "block"
  var oneClick = document.getElementById("b")
  oneClick.style.display = "none"
  document.getElementById("a").src = "images/" + aaa + ".jpg"
  document.getElementById("player").value = aaa
  var num = Math.floor(Math.random() * 3 + 1)
  if (num == '1') {
    document.getElementById("c").src = "images/jiandao.jpg"
    document.getElementById("npc").value = "jiandao"
  }
  if (num == '2') {
    document.getElementById("c").src = "images/shitou.jpg"
    document.getElementById("npc").value = "shitou"
  }　
  if (num == '3') {
    document.getElementById("c").src = "images/bu.jpg"
    document.getElementById("npc").value = "bu"
  }
  var player = document.getElementById("player").value
  var npc = document.getElementById("npc").value
  if (player == "jiandao" && npc == "jiandao") {
    document.getElementById("shuying").innerHTML = "Dogfall!"
  }
  if (player == "jiandao" && npc == "shitou") {
    document.getElementById("shuying").innerHTML = "You lose!"
  }
  if (player == "jiandao" && npc == "bu") {
    document.getElementById("shuying").innerHTML = "You Win!"
    times++
    document.getElementById('cishu').innerHTML = times
  }
  if (player == "shitou" && npc == "jiandao") {
    document.getElementById("shuying").innerHTML = "You Win!"
    times++
    document.getElementById('cishu').innerHTML = times
  }
  if (player == "shitou" && npc == "shitou") {
    document.getElementById("shuying").innerHTML = "Dogfall!"
  }
  if (player == "shitou" && npc == "bu") {
    document.getElementById("shuying").innerHTML = "You lose!"
  }
  if (player == "bu" && npc == "jiandao") {
    document.getElementById("shuying").innerHTML = "You lose!"
  }
  if (player == "bu" && npc == "shitou") {
    document.getElementById("shuying").innerHTML = "You Win!"
    times++
    document.getElementById('cishu').innerHTML = times
  }
  if (player == "bu" && npc == "bu") {
    document.getElementById("shuying").innerHTML = "Dogfall!"
  }
}
