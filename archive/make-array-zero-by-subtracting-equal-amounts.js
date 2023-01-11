const minimumOperations = function(nums) {
  let ans = 0
  nums = nums.sort((a,b) => a - b)
  while (nums.length > 0) {
    nums = nums.filter(el => el > 0)
    if (nums.length > 0) {ans++}
    let min = nums[0]
    nums = nums.map(el => el - min)
  }

  return ans
}

console.log(minimumOperations([0]))