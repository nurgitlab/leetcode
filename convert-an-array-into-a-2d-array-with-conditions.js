/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
  let mem = {}
  nums.forEach(n => {
    if (mem[n] === undefined) {
      mem[n] = 0
    }

    mem[n]++
  })

  let sorted = Object.entries(mem).sort((a,b) => b[1] - a[1])

  let ans = []

  sorted.forEach(([val, count]) => {
    for (let i = 0; i < count; i++) {
      if (ans[i] === undefined) {
        ans[i] = []
      }
      ans[i].push(Number(val))
    }
  })

  console.log(sorted)
  return ans
};