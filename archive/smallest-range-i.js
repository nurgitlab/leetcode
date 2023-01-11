var smallestRangeI = function (nums, k) {
  let min = Infinity
  let max = -Infinity
  nums.forEach(el => {
    if (min > el) {
      min = el
    }
    if (max < el) {
      max = el
    }
  })

  max = max - k
  min = min + k

  if (min >= max) {
    return 0
  } else {
    return max - min
  }
};

console.log(smallestRangeI([1], 0))