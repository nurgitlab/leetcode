/**
 * @param {number[]} nums
 */
const NumArray = function(nums) {
  this.nums = nums
}

NumArray.prototype.sumRange = function(left, right) {
  let ans = 0
  for (let i = left; i <=right; i++) {
    ans+=this.nums[i] || 0
  }

  return ans
}