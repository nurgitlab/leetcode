const shuffle = function(nums, n) {
  let x = []
  let y = []
  for (let i = 0; i < n; i++) {
    x.push(nums[i])
    y.push(nums[i + n])
  }

  let ans = []
  for (let i = 0; i < n; i++) {
    ans.push(x[i])
    ans.push(y[i])
  }

  return ans
};