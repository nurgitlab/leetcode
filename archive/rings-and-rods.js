const countPoints = function(rings) {
  let mem = {}
  for (let i = 0; i < rings.length; i+=2) {
    if (mem[rings[i + 1]] === undefined) {
      mem[rings[i + 1]] = new Set()
    }
    mem[rings[i+1]].add(rings[i])
  }
  let ans = 0
  Object.keys(mem).forEach(k => {
    if (mem[k].size === 3) {ans++}
  })
  return ans
}

console.log(countPoints("G4"))