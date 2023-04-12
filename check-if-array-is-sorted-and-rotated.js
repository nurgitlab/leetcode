/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
  let c = 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] < nums[i]) {
      c++
    }
  }

  if (c === 0 || (c === 1 && nums[0] >= nums[nums.length - 1])) {
    return true
  }

  return false
};