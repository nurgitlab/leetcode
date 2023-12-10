var thirdMax = function (nums) {
  let a = -Infinity
  let b = -Infinity
  let c = -Infinity
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= a) {
      if (a === nums[i]) continue
      c = b
      b = a
      a = nums[i]
      continue
    }

    if (nums[i] >= b) {
      if (b === nums[i]) continue
      c = b
      b = nums[i]
      continue
    }

    if (nums[i] >= c) {
      if (c === nums[i]) continue
      c = nums[i]
      continue
    }
  }
  if (c !== -Infinity) {
    return c
  } else {
    return a
  }
};

console.log(thirdMax([1, 2]))
