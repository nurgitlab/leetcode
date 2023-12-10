const maximumGap = function(nums) {
  if (nums.length < 2) {return 0}

  nums = nums.sort((a,b) => a - b)

  let m = -Infinity
  for (let i = 0; i < nums.length - 1; i++) {
    m = Math.max(m, Math.abs(nums[i] - nums[i + 1]))
  }

  return m
}