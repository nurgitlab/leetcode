const singleNumber = function (nums) {
  let mem = {}
  nums.forEach(el => {
    if (mem[el] === undefined) {
      mem[el] = 0
    }

    mem[el]++
  })

  let ans = []
  Object.keys(mem).forEach(k => {
    if (mem[k] === 1) {
      ans.push(Number(k))
    }
  })

  return ans
}

console.log(singleNumber([1, 2, 1, 3, 2, 5]))