const mostFrequentEven = function(nums) {
  let mem = {}
  let max = 0
  nums.forEach(n => {
    if (n % 2 === 0) {
      if (mem[n] === undefined) {
        mem[n] = 1
      } else {
        mem[n]++
      }
      if (max < mem[n]) {max = mem[n]}
    }
  })

  let ans = []
  Object.keys(mem).forEach(k => {
    if (mem[k] === max) {
      ans.push(Number(k))
    }
  })

  ans.sort((a,b) => a-b)

  if (ans.length === 0) {
    return -1
  } else {
    return ans[0]
  }
};