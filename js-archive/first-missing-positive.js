const firstMissingPositive = function (nums) {
  let set = new Set(nums)
  let ans
  for (let i = 0; i < nums.length; i++) {
    if (set.has(i + 1)) {
      continue
    } else {
      ans = i + 1
      break
    }
  }

  if (ans === undefined) {
    if (set.has(nums.length)) {
      ans = nums.length + 1
    } else {
      ans = nums.length
    }
  }

  return ans
}

console.log(firstMissingPositive([1]))