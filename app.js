// counter making functionality start

var count = document.getElementById('increm')

var val = 0
function increment() {
  val++
  count.innerText = val
  if(val < 1){
    count.innerText = val = 0
  }
}

function decrement() {
  val--
  count.innerText = val
  if(val < 1){
    count.innerText = val = 0
  }
}

function reset() {
  val = 0
  count.innerText = val
}

// counter making functionality end