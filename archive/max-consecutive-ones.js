const findMaxConsecutiveOnes = function(nums) {
  let max = 0
  let mem = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      mem++
    } else {
      mem = 0
    }

    max = Math.max(mem, max)
  }

  return max
}

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))