/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  if (n === 2) return 1
  if (n === 3) return 2

  //5 3 + 2
  //6 3 + 3
  //7 3 + 2 + 2

  let d = 0, t = 0

  while (n % 3 !== 0) {
    n-=2
    d++
  }

  t = n / 3

  return (2 ** d) * (3 ** t)
};