const digitCount = function(num) {
  let mem = {}
  let mem2 = {}
  num.split('').forEach((el, i) => {
    if (mem[el] === undefined) {
      mem[el] = 1
    } else {
      mem[el]++
    }

    mem2[i] = Number(el)
  })
  let ans = true

  Object.keys(mem).forEach(k => {
    if (mem2[k] === undefined) {
      ans = false
    } else {
      mem2[k]-=mem[k]
    }
  })
  Object.keys(mem2).forEach(k => {
    if (mem2[k]!==0) {
      ans = false
    }
  })

  return ans
}

console.log(digitCount("1210"))