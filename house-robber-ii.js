const rob = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  if (nums.length === 1) {
    return nums[0]
  }
  return Math.max(myRob(nums.slice(1)),myRob(nums.slice(0, -1)))
};

function myRob (nums) {
  if (nums.length === 2) {return Math.max(nums[0], nums[1])}
  if (nums.length === 1) {return nums[0]}
  if (nums.length === 0) {return 0}

  let n = nums.length
  for (let i = 0; i < n; i++) {
    nums[i]+= Math.max(nums[i - 2] || 0, nums[i-3] || 0)

  }
  let max = 0
  nums.forEach(el => max = Math.max(el, max))

  return max
}