/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  nums = nums.sort((a,b) => a - b)
  let [l, r] = [0, nums.length - 1]

  let ans = 0

  while (l < r) {
    if (nums[l] + nums[r] === k) {
      l++
      r--
      ans++
    } else if (nums[l] + nums[r] > k) {
      r--
    } else {
      l++
    }
  }

  return ans
};