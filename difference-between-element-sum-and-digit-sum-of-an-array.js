const differenceOfSum = function(nums) {
  let sum = 0
  let sumOfEls = 0
  nums.forEach(el => {
    sum+=el
    String(el).split('').forEach(s => sumOfEls+=Number(s))
  })

  return Math.abs(sum - sumOfEls)
};