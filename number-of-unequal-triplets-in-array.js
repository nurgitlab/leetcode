/**
 * @param {number[]} nums
 * @return {number}
 */
const unequalTriplets = function(nums) {
  let ans = 0
  for (let i = 0; i < nums.length - 2; i++) {
    for(let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let set = new Set([nums[i], nums[j], nums[k]])

        if (set.size === 3) {
          ans+=1
        }
      }
    }
  }

  return ans
}
