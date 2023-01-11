const createTargetArray = function(nums, index) {
  let ans = []
  for (let i = 0; i < nums.length; i++) {
    if (ans[index[i]] === undefined) {
      ans[index[i]] = nums[i]
    } else {
      let l1 = ans.slice(0, index[i])
      let l2 = ans.slice(index[i])

      ans = [...l1, nums[i], ...l2]
    }
  }

  return ans
}

console.log(createTargetArray([1,2,3,4,0], [0,1,2,3,0]))