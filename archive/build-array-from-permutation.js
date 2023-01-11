const buildArray = function(nums) {
  let ans = []
  nums.forEach((el, i) => {
    ans[i] = nums[nums[i]]
  })

  return ans
};

console.log(buildArray([0,2,1,5,3,4]))