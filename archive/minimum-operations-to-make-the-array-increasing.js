const minOperations = function(nums) {
  if (nums.length < 2) {return 0}
  let prev = nums[0]
  let ans = 0
  for (let i = 1; i < nums.length; i++) {
    if (prev >= nums[i]) {
      let r = prev + 1 - nums[i]
      ans+=r
      nums[i]+=r
    }

    prev = nums[i]
  }

  return ans
};

console.log(minOperations([1,5,2,4,1]))