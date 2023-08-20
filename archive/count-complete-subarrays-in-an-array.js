var countCompleteSubarrays = function(nums) {
  let n = new Set(nums).size, ans = 0

  for (let i = 0; i < nums.length; i++) {
    let t = new Set()
    for (let j = i; j < nums.length; j++) {
      t.add(nums[j])

      if (n === t.size) {
        ans+=nums.length - j
        break
      }
    }
  }

  return ans
};