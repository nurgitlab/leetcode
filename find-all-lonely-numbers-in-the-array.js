const findLonely = function(nums) {
  let mem = {}

  nums.forEach(n => {
    if (mem[n] === undefined) {mem[n] = 0}
    mem[n]++
  })

  let ans = []

  Object.keys(mem).forEach(k => {
    if (mem[k] === 1 && mem[Number(k) - 1] === undefined && mem[Number(k) + 1] === undefined) {
      ans.push(Number(k))
    }
  })

  return ans
}