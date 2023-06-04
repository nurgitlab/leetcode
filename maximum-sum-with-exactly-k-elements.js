/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
  let max = Math.max(...nums), ans = 0
  while (k > 0) {
    ans+=max
    max++
    k--
  }

  return ans
}