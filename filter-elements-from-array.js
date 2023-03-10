/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  let ans = []

  arr.forEach((el, i) => {
    if (fn(el, i)) {
      ans.push(el)
    }
  })

  return ans
};