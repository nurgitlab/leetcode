const dominantIndex = function(nums) {
  let max = [-Infinity, undefined]

  nums.forEach((el, i) => {
    if (el > max[0]) {
      max[0] = el
      max[1] = i
    }
  })
  nums.forEach(el => {
    if (el === max[0]) {
      return
    } else if (el * 2 > max[0]) {
      max = [Infinity, -1]
    }
  })

  return max[1]
};

console.log(dominantIndex([1,2,3,4]))