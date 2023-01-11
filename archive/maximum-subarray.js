var maxSubArray = function (nums) {
  let ans = nums[0]
  let sum = 0
  for (let i in nums) {
    sum += nums[i]
    if (sum > ans) {
      ans = sum
    }
    if (sum < 0) {
      sum = 0
    }
  }

  return ans
};

console.log(maxSubArray([5, 4, -1, 7, 8]))