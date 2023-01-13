const triangularSum = function(nums) {
  while (nums.length > 1) {
    let a = []
    for (let i = 0; i < nums.length - 1; i++) {
      a.push((nums[i] + nums[i+1]) % 10)
    }
    nums = [...a]
  }

  return nums[0]
}

console.log(triangularSum([1,2,3,4,5]))