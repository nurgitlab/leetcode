const trap = function (height) {
  if (height.length < 3) {
    return 0
  }

  let l = 0
  let r = height.length - 1

  let lm = height[l]
  let rm = height[r]

  let ans = 0
  while (l < r) {
    if (lm < rm) {
      l++

      if (height[l] < lm) {
        ans+=lm - height[l]
      } else {
        lm = height[l]
      }
    } else {
      r--

      if (height[r] < rm) {
        ans+=rm - height[r]
      } else {
        rm = height[r]
      }
    }
  }

  return ans
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))