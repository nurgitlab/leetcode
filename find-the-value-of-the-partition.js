var findValueOfPartition = function(nums) {
  nums = nums.sort((a, b) => a - b)

  let min = Infinity
  for (let i = 0; i < nums.length - 1; i++) {
    min = Math.min(min, Math.abs(nums[i] - nums[i + 1]))
  }

  return min
};