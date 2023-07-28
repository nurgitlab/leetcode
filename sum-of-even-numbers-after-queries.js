var sumEvenAfterQueries = function(nums, queries) {
  let ans = []

  for (let i = 0; i < nums.length; i++) {
    let [val, j] = queries[i]
    nums[j]+=val

    let sum = nums.reduce((s, el) => el % 2 === 0 ? s + el : s, 0)

    ans.push(sum)
  }

  return ans
};