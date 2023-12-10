const rotate = function (nums, k) {
  k %= nums.length
  let a = [...nums]
  a = [...a.slice(nums.length - k), ...a.slice(0, nums.length - k)]

  for (let i = 0; i < nums.length; i++) {
    nums[i] = a[i]
  }

  return nums
}