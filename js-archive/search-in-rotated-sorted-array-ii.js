/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let [l,r] = [0, nums.length - 1]

  while (l <= r) {
    let m = Math.floor((l + r) / 2)
    console.log(l, r)
    if (nums[m] === target) {return true}

    if (nums[r] === nums[m]) {
      r--
    } else
    if (nums[l] > nums[m]) {
      if (target >= nums[m] && target <= nums[r]) {
        l = m + 1
      } else {
        r = m - 1
      }
    } else if (nums[m] > nums[r]) {
      if (target >= nums[l] && target <= nums[m]) {
        r = m - 1
      } else {
        l = m + 1
      }
    } else if (nums[m] > target) {
      r = m - 1
    } else {
      l = m + 1
    }
  }

  return false
};