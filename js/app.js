function swapPrice(val1, val2, val3) {
  document.getElementById('priceSwap1').innerHTML = val1
  document.getElementById('priceSwap2').innerHTML = val2
  document.getElementById('priceSwap3').innerHTML = val3
}

function reviewSwap(value) {
  var r1 = document.getElementById('speech__swap1')
  var r2 = document.getElementById('speech__swap2')
  var r3 = document.getElementById('speech__swap3')
  if (value == 'tap1') {
    r1.style.display = 'flex'
    r2.style.display = 'none'
    r3.style.display = 'none'
  } else if (value == 'tap2') {
    r1.style.display = 'none'
    r2.style.display = 'flex'
    r3.style.display = 'none'
  } else if (value == 'tap3') {
    r1.style.display = 'none'
    r2.style.display = 'none'
    r3.style.display = 'flex'
  }
}