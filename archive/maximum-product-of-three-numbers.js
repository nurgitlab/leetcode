const maximumProduct = function(nums) {
  nums = nums.sort((a,b) => Math.abs(b) - Math.abs(a))
  //все 3 положительные
  //1 положительное, 2 отрицательных
  let positive = []
  let otr = []
  let zeros = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positive.push(nums[i])
    } else if (nums[i] === 0) {
      zeros.push(nums[i])
    } else {
      otr.push(nums[i])
    }
  }

  let max = -Infinity

  if (positive.length >= 3) {
    max = Math.max(positive[0] * positive[1] * positive[2], max)
  }

  if (positive.length >= 1 && otr.length >=2) {
    max = Math.max(positive[0] * otr[0] * otr[1], max)
  }

  if (zeros.length > 0) {
    max = Math.max(0, max)
  }

  if (otr.length >= 3) {
    max = Math.max(otr[otr.length - 1] * otr[otr.length - 2] * otr[otr.length - 3], max)
  }
  return max
}

console.log(maximumProduct([-1,-2,-3]))