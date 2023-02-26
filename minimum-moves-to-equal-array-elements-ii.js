/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  nums = nums.sort((a,b) => a - b)

  let median = nums[Math.floor(nums.length / 2)]
  let ans = nums.reduce((sum,el) => {return sum + Math.abs(el - median)}, 0)

  return ans
}