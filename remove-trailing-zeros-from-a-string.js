/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
  num = num.split('')
  while (num[num.length - 1] === '0') {
    num.pop()
  }

  return num.join('')
};