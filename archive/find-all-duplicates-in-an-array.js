const findDuplicates = function(nums) {
  const mem = {}
  nums.forEach(n => {
    if (mem[n] === undefined) {
      mem[n] = 1
    } else {
      mem[n]++
    }
  })
  let ans = []
  Object.keys(mem).forEach(k => {
    if (mem[k] === 2) {ans.push(Number(k))}
  })
  return ans
};