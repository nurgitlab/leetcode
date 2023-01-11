const applyOperations = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2
      nums[i + 1] = 0
    }
  }

  let m = nums.length
  nums = nums.filter(el => el !== 0)

  for (let i = nums.length; i < m; i++) {
    nums.push(0)
  }

  return nums
}

console.log(applyOperations([1, 2, 2, 1, 1, 0]))