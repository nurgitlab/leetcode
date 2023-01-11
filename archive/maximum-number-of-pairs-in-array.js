const numberOfPairs = function(nums) {
  const mem = {}

  nums.forEach(n => {
    if (mem[n] === undefined) {
      mem[n] = 1
    } else {
      mem[n]++
    }
  })
  let ans = [0, 0]
  Object.keys(mem).forEach(k => {
    ans[1]+=mem[k]%2
    ans[0]+=Math.floor(mem[k]/2)
  })

  return ans
};

console.log(numberOfPairs([1,3,2,1,3,2,2]))