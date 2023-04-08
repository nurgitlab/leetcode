/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
  nums = nums.filter(el => el % 6 === 0)

  let sum = nums.reduce((s,el) => s+=el, 0)

  if (nums.length > 0) {
    return Math.floor(sum / nums.length)
  }

  return 0
};