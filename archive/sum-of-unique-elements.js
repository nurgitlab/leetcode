const sumOfUnique = function(nums) {
  const mem = {}

  nums.forEach(n => {
    if (mem[n] === undefined) {
      mem[n] = 1
    } else {
      mem[n]++
    }
  })

  let ans = 0

  Object.keys(mem).forEach(n => {
    if (mem[n] === 1) {
      ans+=Number(n)
    }
  })

  return ans
};

console.log(sumOfUnique([1,2,3,2]))