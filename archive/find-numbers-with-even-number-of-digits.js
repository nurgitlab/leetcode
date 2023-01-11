const findNumbers = function(nums) {
  let ans = 0
  nums.forEach(el => {
    if (String(el).length % 2 === 0) {
      ans++
    }
  })

  return ans
};