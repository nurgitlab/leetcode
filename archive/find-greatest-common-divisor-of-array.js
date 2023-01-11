const findGCD = function (nums) {
  let max = -Infinity
  let min = Infinity

  nums.forEach(n => {
    max = Math.max(max, n)
    min = Math.min(min, n)
  })
  let ans = 1
  for (let i = 2; i<=min; i++) {
    if (max % i === 0 && min % i ===0) {
      ans = i
    }
  }

  return ans
};