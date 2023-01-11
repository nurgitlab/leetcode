const minStartValue = function (nums) {
  nums = [0, ...nums]
  let min = Infinity
  for (let i = 1; i < nums.length; i++) {
    nums[i]+= nums[i - 1]
    min = Math.min(min, nums[i])
  }

  if (min < 0) {
    return Math.abs(min) + 1
  }
  return 1
}

console.log(minStartValue([1, 2]))