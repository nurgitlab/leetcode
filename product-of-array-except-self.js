/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let countOfZeros = 0
  let p = nums.reduce((s, el) => {
    if (el === 0) {
      countOfZeros++
      return s
    } else {
      return s*=el
    }
  }, 1)

  return nums.map(el => {
    if (countOfZeros === 1) {
      if (el === 0) {
        return p
      } else {
        return 0
      }
    } else if (countOfZeros > 1) {
      return 0
    } else {
      return p/ el
    }
  })
};