const maximumPopulation = function (logs) {
  let mem = {}
  let maxPop = 0

  logs.forEach(([start, end]) => {
    for (let i = start; i < end; i++) {
      if (mem[i] === undefined) {
        mem[i] = 0
      }
      mem[i]++
      maxPop = Math.max(mem[i], maxPop)
    }
  })

  let ans = Infinity
  Object.keys(mem).forEach(k => {
    if (mem[k] === maxPop) {
      ans = Math.min(ans, Number(k))
    }
  })

  return ans
}

console.log(maximumPopulation([[2008, 2026], [2004, 2008], [2034, 2035], [1999, 2050], [2049, 2050], [2011, 2035], [1966, 2033], [2044, 2049]]))