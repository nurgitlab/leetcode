const countKDifference = function (nums, k) {
  let ans = 0
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[j] - nums[i]) === k) {
        ans++
      }
    }
  }

  return ans
}

console.log(countKDifference([1, 2, 2, 1], 1))