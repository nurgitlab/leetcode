/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  let nums = [0, 1]
  for (let i = 0; i <= n; i++) {
    nums[i * 2] = nums[i]
    nums[i * 2 + 1] = nums[i] + nums[i + 1]
  }
  return Math.max(...nums.slice(0,n + 1))
};