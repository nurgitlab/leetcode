const answerQueries = function (nums, queries) {
  let ans = []
  nums.sort((a, b) => a - b)
  queries.forEach(el => {
    let s = 0
    let max = 0
    for (let i = 0; i < nums.length; i++) {
      s += nums[i]
      if (s <= el) {
        max = i + 1
      }
    }
    ans.push(max)
  })

  return ans
}

console.log(answerQueries(
  [2,3,4,5],  [1]
))