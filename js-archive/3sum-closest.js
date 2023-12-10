var threeSumClosest = function (nums, target) {
  let n = nums.length
  nums.sort((a, b) => {
    if (a > b) {
      return 1
    } else {
      return -1
    }
  })
  let ans
  let min = Infinity
  for (let i = 0; i < n; i++) {
    let a = nums[i]
    let l = i + 1
    let r = n - 1

    while (l < r) {
      let sum = a + nums[l] + nums[r]
      let razn = Math.abs(sum - target)
      if (min > razn) {
        min = razn
        ans = sum
      }

      if (sum > target) {
        r--
      } else if (sum < target) {
        l++
      } else {
        break
      }
    }
  }

  return ans
};

console.log(threeSumClosest([0, 0, 0], 1))