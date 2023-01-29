const toHex = function(num) {
  if (num < 0) {
    num = Math.pow(2, 32) + num
  }
  let arr = []

  while (num > 0) {
    arr.push(num % 16)
    num = (num - num % 16) / 16
  }


  arr = arr.reverse().map(el => {
    if (el === 10) {
      el = 'a'
    }
    if (el === 11) {
      el = 'b'
    }
    if (el === 12) {
      el = 'c'
    }
    if (el === 13) {
      el = 'd'
    }
    if (el === 14) {
      el = 'e'
    }
    if (el === 15) {
      el = 'f'
    }

    return String(el)
  }).join('')

  if (arr.length === 0) {arr = '0'}
  return arr
};