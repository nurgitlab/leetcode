/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function(nums) {
  function rec(l, r) {
    if (l > r) return nums[0];

    let m = Math.floor((l + r) / 2)

    if (nums[m + 1] === undefined) {
      return Math.min(rec(l, m - 1), rec(m + 1, r - 1))
    } else if (nums[m] <= nums[m + 1]) {
      return Math.min(rec(l, m - 1), rec(m + 1, r))
    }

    return Math.min(nums[0], nums[m + 1])
  }

  return rec(0, nums.length - 1)
};