/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function(nums) {
  //2 4 1 3
  //1 4 2 3
  //1 2 4 3
  //1 2 4 3

  let max = nums.indexOf(nums.length), min = nums.indexOf(1)

  if (max < min) {
    return min + nums.length - 2 - max
  }

  return min + nums.length - 1 - max
}