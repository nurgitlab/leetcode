const arithmeticTriplets = function (nums, diff) {
  let ans = 0
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[j] - nums[i] === diff &&
          nums[k] - nums[j] === diff
        ) {
          ans++
        }
      }
    }
  }

  return ans
}

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], diff = 3))