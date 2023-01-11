const minimumRounds = function (tasks) {
  let mem = {}
  tasks.forEach(el => {
    if (mem[el] === undefined) {
      mem[el] = 0
    }
    mem[el]++
  })

  let ans = 0
  let can = true
  Object.keys(mem).forEach(k => {
    if (mem[k] === 1) {
      can = false
    } else {
      ans+=Math.floor(mem[k]/3)
      if (mem[k]%3 !== 0) {ans++}
    }
  })

  if (can) {
    return ans
  }
  return -1
}

console.log(minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4]))