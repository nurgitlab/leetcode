/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  let mem = {}
  nums.forEach(el => {
    if (mem[el] === undefined) {mem[el] = 0}
    mem[el]++
  })

  let arr = Object.entries(mem).map(el => {
    el[0] = Number(el[0])

    return el
  }).sort((a,b) => a[0] - b[0])

  let ans = 0
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][0] + 1 === arr[i + 1][0]) {
      ans = Math.max(ans, arr[i][1] + arr[i + 1][1])
    }
  }

  return ans
};