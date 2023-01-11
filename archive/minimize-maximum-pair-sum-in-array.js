const minPairSum = function (nums) {
  nums = nums.sort((a, b) => a - b)
  let p = -Infinity
  for (let i = 0; i < nums.length / 2; i++) {
    p = Math.max(p, nums[i] + nums[nums.length - 1 - i])
  }

  return p
}

console.log(minPairSum([3, 5, 2, 3]))