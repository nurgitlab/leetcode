const isCovered = function (ranges, left, right) {
  const mem = {}
  ranges.forEach(t => {
    for (let i = t[0]; i <= t[1]; i++) {
      mem[i] = true
    }
  })

  let ans = true
  for (let i = left; i <= right; i++) {
    if (mem[i] === undefined) {
      ans = false
      break
    }
  }

  return ans
}

console.log(isCovered([[1, 2], [3, 4], [5, 6]], 2, 7))