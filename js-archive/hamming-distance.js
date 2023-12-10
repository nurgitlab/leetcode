const hammingDistance = function(x, y) {
  [x, y] = [x,y].map(el => toBin(el))
  while (x.length !== y.length) {
    if (x.length > y.length) {
      y = '0' + y
    } else {
      x = '0' + x
    }
  }

  return x.split('').reduce((sum, el, i) => {
    if (el !== y[i]) {
      return sum + 1
    }

    return sum
  }, 0)
};

function toBin (num) {
  let s = ''
  while (num > 0) {
    s+=num%2
    num = Math.floor(num / 2)
  }

  return s.split('').reverse().join('')
}