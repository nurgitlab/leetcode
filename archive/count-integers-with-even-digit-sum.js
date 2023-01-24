/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let ans = 0
  for (let i = 1; i <= num; i++) {
    let s = String(i).split('').map(el => Number(el))
    let sum = 0
    s.forEach(el => sum += el)

    if (sum % 2 === 0) {
      ans++
    }
  }

  return ans
};