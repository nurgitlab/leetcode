var matrixSum = function(nums) {
  let ans = 0
  nums = nums.map(el => el.sort((a, b) => b - a))
  for (let i = 0; i < nums[0].length; i++) {
    let max = -1
    for (let j = 0; j < nums.length; j++) {
      max = Math.max(nums[j][i], max)
    }

    ans+=max
  }

  return ans
}