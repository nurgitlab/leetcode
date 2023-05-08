/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
  let c = 0
  let z;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] >= nums[i + 1]) {
      z = i
      c++
    }
  }

  if (c === 0) {
    return true
  }

  if (c === 1) {
    if (z === 0) {return true}

    if (nums[z - 1] < nums[z + 1]) {return true}
    if (nums[z + 2]) {
      if (nums[z] < nums[z + 2]) {return true}
    } else {
      return true
    }
  }

  return false
};