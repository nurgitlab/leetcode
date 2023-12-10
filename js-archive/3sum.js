var threeSum = function (nums) {
  let n = nums.length
  let ans = []
  nums.sort((a, b) => {
    if (a < b) {
      return -1
    } else {
      return 1
    }
  })
  for (let i = 0; i < n; i++) {
    if (nums[i] === nums[i - 1]) {
      continue
    }
    let l = i + 1
    let r = n - 1

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r]

      if (sum > 0) {
        r--
      } else if (sum < 0) {
        l++
      } else {
        ans.push([nums[i], nums[l], nums[r]])
        l++
        while (nums[l] === nums[l - 1] && l < r) {
          l++
        }
      }
    }
  }

  return ans
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))