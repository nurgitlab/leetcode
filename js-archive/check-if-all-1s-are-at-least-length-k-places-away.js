/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
  let ans = true
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) continue
    let l = i - 1, r = i + 1
    while (l >= Math.max(i - k, 0)) {
      if (nums[l] === 1) {
        ans = false
        break
      }
      l--
    }

    while (r <= Math.min(nums.length - 1, i + k)) {
      if (nums[r] === 1) {
        ans = false
        break
      }
      r++
    }
  }

  return ans
}