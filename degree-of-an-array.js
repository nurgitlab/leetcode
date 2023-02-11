const findShortestSubArray = function(nums) {
  let mem = {}
  let max = -1
  nums.forEach(n => {
    if (mem[n] === undefined) {mem[n] = 0}
    mem[n]+=1
    max = Math.max(max, mem[n])
  })

  let candidates = []
  Object.keys(mem).forEach(k => {
    if (mem[k] === max) {
      candidates.push(Number(k))
    }
  })
  let ans = Infinity
  for (let i = 0; i < candidates.length; i++) {
    let firstIn = -1
    let lastIn = -1

    for (let j = 0; j < nums.length; j++) {
      if (firstIn === -1 && nums[j] === candidates[i]) {
        firstIn = j
      }

      if (nums[j] === candidates[i]) {
        lastIn = j
      }
    }

    ans = Math.min(ans, lastIn - firstIn + 1)
  }

  return ans
};