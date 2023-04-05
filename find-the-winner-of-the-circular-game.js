/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
  let arr = []

  for (let i = 0; i < n; i++) {
    arr.push(i)
  }

  let [i, lk] = [0, k - 1];
  while (arr.length > 1) {
    if (lk > 0) {
      i++
      lk--
    } else {
      lk = k - 1
      arr = [...arr.slice(0, i), ...arr.slice(i + 1)]
    }

    if (i >= arr.length) {
      i = 0
    }
  }

  return arr[0] + 1
}