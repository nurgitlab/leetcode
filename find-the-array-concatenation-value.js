/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
  let [l, r, ans] = [0, nums.length - 1, 0]

  while (l <= r) {
    if (l === r) {
      ans+=nums[l]
      l++
    } else {
      ans+=Number(String(nums[l]) + String(nums[r]))
      l++
      r--
    }
  }

  return ans
};