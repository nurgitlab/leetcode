const reverse = function(x) {
  if (x >= 0) {
    x =  Number(String(x).split('').reverse().join(''))

    if (x > (Math.pow(2,31) - 1) || x < -Math.pow(2, 31)) {return 0}

    return x
  }
  x = -Number(String(Math.abs(x)).split('').reverse().join(''))

  if (x > (Math.pow(2,31) - 1) || x < -Math.pow(2, 31)) {return 0}

  return x
}

console.log(reverse(1534236469))