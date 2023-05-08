/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
  return nums.map(el => String(el).split('').map(n => Number(n))).flat(2)
};