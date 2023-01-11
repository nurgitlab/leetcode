const findMiddleIndex = function(nums) {
  for (let i =  1; i < nums.length; i++) {
    nums[i]+=nums[i - 1]
  }

  let ans = -1

  nums = [0, ...nums]

  console.log(nums)

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[nums.length - 1] - nums[i]) {
      ans = i - 1
      break
    }
  }

  return ans
}

console.log(findMiddleIndex( [2,3,-1,8,4]))