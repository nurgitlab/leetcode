const minMaxGame = function(nums) {
  while (nums.length > 1) {
    let isMin = true
    for (let i = 0; i < nums.length; i+=2) {
      if (isMin) {
         nums[i] = Math.min(nums[i], nums[i + 1])
      } else {
        nums[i] = Math.max(nums[i], nums[i + 1])
      }
      nums[i+1] = 0
      isMin = !isMin
    }
    nums = nums.filter(el => el > 0)
  }

  return nums[0]
}

console.log(minMaxGame([1,3,5,2,4,8,2,2]))