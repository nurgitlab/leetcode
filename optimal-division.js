/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
  if (nums.length === 1) {return '' + nums[0]}
  let a = nums[0]
  let b = nums.slice(1)
  if (b.length === 1) {
    return a + '/' + b[0]
  }
  return '' + a + '/(' + b.join('/')+')'
};