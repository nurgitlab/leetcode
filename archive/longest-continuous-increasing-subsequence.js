/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let ans = 1
  for (let i = 0; i < nums.length; i++) {
    let c = i
    while (nums[i] < (nums[i + 1] || -Infinity)) i++

    ans = Math.max(ans, i - c + 1)
  }

  return ans
}