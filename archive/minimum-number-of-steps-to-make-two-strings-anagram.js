const minSteps = function (s, t) {
  let mem = {}
  s.split('').forEach(el => {
    if (mem[el] === undefined) {
      mem[el] = 1
    } else {
      mem[el]++
    }
  })
  t.split('').forEach(el => {
    if (mem[el] === undefined) {
      mem[el] = -1
    } else {
      mem[el]--
    }
  })

  let sum = 0

  Object.keys(mem).forEach(k => {
    sum += Math.abs(mem[k])
  })

  return sum
}

console.log(minSteps("leetcode", "coats"))