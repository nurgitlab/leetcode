const singleNumber = function(nums) {
  const mem = {}
  nums.forEach(el => {
    if (mem[el] === undefined) {
      mem[el] = true
    } else if (mem[el]) {
      mem[el] = false
    }
  })

  let ans

  Object.keys(mem).forEach(k => {
    if (mem[k]) {
      ans = Number(k)
    }
  })

  return ans
};

console.log(singleNumber([2,2,3,2]))