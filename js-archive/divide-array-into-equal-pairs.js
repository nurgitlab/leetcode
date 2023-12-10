const divideArray = function (nums) {
  let mem = {}
  nums.forEach(el => {
    if (mem[el] === undefined) {
      mem[el] = 1
    } else {
      mem[el]++
    }
  })

  let ans = true
  Object.keys(mem).forEach(k => {
    if (mem[k] % 2 !== 0) {
      ans = false
    }
  })

  return ans
}

console.log(divideArray([3, 2, 3, 2, 2, 2]))