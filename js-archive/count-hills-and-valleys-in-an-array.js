const countHillValley = function (nums) {
  let n = []
  for (let i = 0; i < nums.length; i++) {
    n.push(nums[i])
    while (nums[i] === nums[i + 1]) {
      i++
    }
  }
  let ans = 0

  for (let i = 1; i < n.length - 1; i++) {
    if (n[i - 1] < n[i] && n[i + 1] < n[i]) {
      ans++
    }
    if (n[i] < n[i + 1] && n[i] < n[i - 1]) {
      ans++
    }
  }
  return ans
}

console.log(countHillValley([2, 4, 1, 1, 6, 5]))