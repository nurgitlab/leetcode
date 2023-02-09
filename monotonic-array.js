const isMonotonic = function(nums) {
  if (nums.length < 2) {return true}

  let isT = true
  let isD = true
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      isD = false
    }

    if (nums[i] > nums[i + 1]) {
      isT = false
    }
  }

  return isT || isD
}