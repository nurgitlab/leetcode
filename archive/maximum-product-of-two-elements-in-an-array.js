const maxProduct = function(nums) {
  let m = nums.map(el => el - 1)
  m.sort((a,b) => a-b)

  return m[m.length - 1] * m[m.length - 2]
};