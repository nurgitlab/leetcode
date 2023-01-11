const intersection = function(nums) {
  const mem = {}
  nums.forEach(arr => {
    arr.forEach(n => {
      if (mem[n] === undefined) {
        mem[n] = 1
      } else {
        mem[n]++
      }
    })
  })

  let ans = []

  Object.keys(mem).forEach(k => {
    if (mem[k]===nums.length) {
      ans.push(Number(k))
    }
  })

  return ans
}

console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]))