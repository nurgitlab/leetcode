/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
  // (n - 2) + (n - 2) + n + n
  // 2 -> 4
  // 3 -> 2 + 6 = 8
  // 1 + 2*(n-1) |sum 2...n

  let ans = 1

  for (let i = 2; i <= n; i++) ans+=4* (i - 1)

  return ans
};