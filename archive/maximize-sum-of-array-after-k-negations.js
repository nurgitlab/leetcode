const largestSumAfterKNegations = function(nums, k) {
  let isHasZero = false
  nums = nums.sort((a,b) => a - b)
  nums.forEach(el => {
    if (el === 0) {
      isHasZero = true
    }
  })

  if (isHasZero) {
    nums = nums.map(el => {
      if (k > 0 && el < 0) {
        k-=1
        return -el
      }

      return el
    })
  } else {
    nums = nums.map((el, i) => {
      if (k > 0) {
        if (el > 0) {
          if (k % 2 === 0) {
            k = 0
            return el
          } else {
            k = 0
            return -el
          }
        } else {
          if (nums[i + 1]!==undefined) {
            if (nums[i + 1] > 0) {
              if (-nums[i] < nums[i + 1]) {
                if (k % 2 === 0) {
                  k = 0
                  return el
                }
                k = 0
                return -el
              }
            }
          }
          k-=1
          return -el
        }
      }

      return el
    })
  }

  nums = nums.sort((a,b) => a - b)

  if (k % 2 !== 0) {
    nums[0] = -nums[0]
  }

  return nums.reduce((s, el) => s+el)
}