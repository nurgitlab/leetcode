const minimumSum = function (num) {
  let nums = String(num).split('')
  nums.forEach((el, i) => {
    nums[i] = Number(el)
  })

  nums.sort((a, b) => a - b)
  nums.forEach((el, i) => nums[i] = String(el))
  let a = nums[0] + nums[3]
  let b = nums[1] + nums[2]
  return Number(a) + Number(b)
};

console.log(minimumSum(2932))