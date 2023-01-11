const maxProductDifference = function(nums) {
  let maxEl = -Infinity
  let minEl = Infinity

  let prevMax = -Infinity
  let prevMin = Infinity
  nums.forEach(n => {
    if (n >= prevMax) {
      if (n >= maxEl) {
        prevMax = maxEl
        maxEl = n
      } else {
        prevMax = n
      }
    }

    if (n <= prevMin) {
      if (n <= minEl) {
        prevMin = minEl
        minEl = n
      } else {
        prevMin = n
      }
    }
  })

  return Math.abs(prevMin * minEl - maxEl * prevMax)
};

console.log(maxProductDifference([4,2,5,9,7,4,8]))