const findSubarrays = function (nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    let sum1 = nums[i] + nums[i + 1]
    for (let j = i + 1; j < nums.length; j++) {
      let sum2 = nums[j] + nums[j + 1]
      if (sum1 === sum2) {
        return true
      }
    }
  }

  return false
}

console.log(findSubarrays([4, 2, 4]))