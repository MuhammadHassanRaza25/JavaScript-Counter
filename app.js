// counter making

var val = 0
function increment() {
  val++
  var count = document.getElementById('increm').innerText = val
  if(val < 1){
    var count = document.getElementById('increm').innerText = val = 0
  }
}

function decrement() {
  val--
  var count = document.getElementById('increm').innerText = val
  if(val < 1){
    var count = document.getElementById('increm').innerText = val = 0
  }
}

function reset() {
  val = 0
  var count = document.getElementById('increm').innerText = val
}
