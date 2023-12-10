const singleNumber = function(nums) {
  return nums.reduce((sum, val) => {return sum ^ val})
}