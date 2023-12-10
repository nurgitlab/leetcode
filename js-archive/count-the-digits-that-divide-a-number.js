/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
  return String(num).split('').reduce((acc, val) => {
    let n = Number(val)

    if (num % n === 0) {return acc + 1}
    return acc
  }, 0)
};