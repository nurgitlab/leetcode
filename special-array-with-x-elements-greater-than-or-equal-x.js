/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
  nums = nums.sort((a,b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums.length - i <= nums[i] && (nums.length - i) > (nums[i - 1] || -1)) return nums.length - i
  }

  return -1
}