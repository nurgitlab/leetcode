/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
  let ans = []
  for (let i = 2; i <= n; i++) {
    for (j = 1; j <= i - 1; j++) {
      if (canShort(i, j) === false) {
        ans.push(j + '/' + i)
      }
    }
  }

  return ans
};

function canShort(el1, el2) {
  for (let i = 2; i <= Math.min(el1, el2); i++) {
    if (el1 % i === 0 && el2 % i === 0) {return true}
  }

  return false
}