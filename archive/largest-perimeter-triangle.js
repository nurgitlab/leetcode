const largestPerimeter = function (nums) {
  nums = nums.sort((a, b) => b - a)

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] < nums[i + 1] + nums[i + 2]) {
      return nums[i] + nums[i + 1] + nums[i + 2]
    }
  }

  return 0
};

console.log(largestPerimeter([1, 2, 1, 10]))