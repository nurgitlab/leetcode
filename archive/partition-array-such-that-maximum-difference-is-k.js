const partitionArray = function(nums, k) {
  nums = nums.sort((a,b) => a - b)

  let ans = 1
  let [s] = nums
  for (let i =0; i < nums.length; i++) {
    if (nums[i] - s <= k) {
      continue
    } else {
      s = nums[i]
      ans++
    }
  }

  return ans
}

console.log(partitionArray( [2,2,4,5],  0))