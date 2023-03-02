/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let [l, r] = [0, nums.length - 1]

  while (l < r) {
    let m = Math.floor((l + r) / 2)
    console.log(l,m, r)
    let [a,b,c] = [nums[l], nums[m], nums[r]]

    if (b > c) {
      l = m + 1

      continue
    }

    if (a > b) {
      r = m - 1

      continue
    }

    break
  }

  console.log(l, r, nums[l - 1 > 0 ? l - 1 : 0])

  return Math.min(
    nums[0],
    nums[l],nums[l + 1 < nums.length ? l + 1 : l], nums[l - 1 > 0 ? l - 1 : 0],
    nums[r],nums[r + 1 < nums.length ? r + 1 : r], nums[r - 1 > 0 ? r - 1 :0]
  )
};