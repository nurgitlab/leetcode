const repeatedNTimes = function(nums) {
  const mem = {}
  nums.forEach(el => {
    if (mem[el] === undefined) {
      mem[el] = 1
    } else {
      mem[el]++
    }
  })

  let ans
  Object.keys(mem).forEach(k => {
    if (mem[k] > 1) {
      ans = Number(k)
    }
  })

  return ans
};