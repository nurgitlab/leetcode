/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
  time%=2* (n - 1)

  if (time >= n) {
    return 2 * n - time - 1
  } else {
    return time + 1
  }
};