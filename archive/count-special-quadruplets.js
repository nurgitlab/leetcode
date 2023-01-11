const countQuadruplets = function (nums) {
  let ans = 0
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      for (let k = j + 1; k < nums.length - 1; k++) {
        for (let m = k + 1; m < nums.length; m++) {
          if (nums[i] + nums[j] + nums[k] === nums[m]) {
            ans++
          }
        }
      }
    }
  }

  return ans
}

console.log(countQuadruplets([1, 1, 1, 3, 5]))