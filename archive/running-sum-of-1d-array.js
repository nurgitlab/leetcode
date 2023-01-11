const runningSum = function(nums) {
  let currentSum = 0
  let ans = []
  nums.forEach(el => {
    currentSum+=el
    ans.push(currentSum)
  })

  return ans
};

console.log(runningSum([1,2,3,4]))