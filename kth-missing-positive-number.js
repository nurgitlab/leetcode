/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  let set = new Set(arr)
  let m = k
  for (let i = 1; i <= arr[arr.length - 1] + m; i++) {
    if (!set.has(i)) {
      k--
    }

    if (k === 0) {
      return i
    }
  }

  return null
};