/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let sum = 0
  let j = 0
  let pay = 0
  for (let i = 1; i <= n; i++) {
    pay++
    sum += pay
    if (i % 7 === 0) {
      j++
      pay = j
    }
  }

  return sum
};