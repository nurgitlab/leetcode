const maxAscendingSum = function (nums) {
  let ans = 0
  let localSum = nums[0]
  if (ans < localSum) {ans = localSum}

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      localSum += nums[i]
    } else {
      localSum = nums[i]
    }

    if (ans < localSum) {ans = localSum}
  }

  return ans
};

console.log(maxAscendingSum([100,10,1]))