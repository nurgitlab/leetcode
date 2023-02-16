/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function(nums) {
  let allSum = 0
  nums.forEach(el => allSum+=el)
  let leftSum = 0
  let ans = -1
  nums.forEach((el, i) => {
    if (ans === -1) {
      allSum-=el

      if (leftSum === allSum) {
        ans = i
      }
      leftSum+=el
    }
  })

  return ans
};