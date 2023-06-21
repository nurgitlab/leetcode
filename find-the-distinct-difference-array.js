/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
  let mem = {}, set = new Set(), ans = []

  for (let i = 0; i < nums.length; i++) {
    if (mem[nums[i]] === undefined) mem[nums[i]] = 0
    mem[nums[i]]++
  }

  for (let i = 0; i < nums.length; i++) {
    mem[nums[i]]-=1
    if (mem[nums[i]] === 0) delete mem[nums[i]]
    set.add(nums[i])

    ans[i] = set.size - Object.keys(mem).length
  }

  return ans
}