/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  function rec(l, r) {
    if (l > r) return -1
    let m = Math.floor((l + r) / 2)

    if (nums[m] === nums[m + 1] || nums[m] === nums[m - 1]) {
      return Math.max(rec(l, m - 1), rec(m + 1, r))
    }

    return nums[m]
  }

  return rec(0, nums.length - 1)
}