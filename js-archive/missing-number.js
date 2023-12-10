var missingNumber = function (nums) {
  let s = new Set()
  let min = 0

  nums.forEach(el => {
    if (el < min) {
      min = el
    }
    s.add(el)
  })

  for (let i = 0; i < nums.length; i++) {
    if (s.has(min)) {
      min++
      continue
    } else {
      break
    }
  }

  return min
};

console.log(missingNumber([0]))