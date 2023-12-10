const maxPoints = function (points) {
  if (points.length === 1) {
    return 1
  }
  let mem = {}
  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      if (points[i][0] === points[j][0]) {
        if (mem[`x=${points[i][0]}`] === undefined) {
          mem[`x=${points[i][0]}`] = new Set()
        }
        mem[`x=${points[i][0]}`].add(`[${points[i]}]`)
        mem[`x=${points[i][0]}`].add(`[${points[j]}]`)
      } else if (points[i][1] === points[j][1]) {
        if (mem[`y=${points[i][1]}`] === undefined) {
          mem[`y=${points[i][1]}`] = new Set()
        }
        mem[`y=${points[i][1]}`].add(`[${points[i]}]`)
        mem[`y=${points[i][1]}`].add(`[${points[j]}]`)
      } else {
        let a = (points[i][1] - points[j][1]) / (points[i][0] - points[j][0])
        let b = points[i][1] - a * points[i][0]
        let f = `y=${a}x${b >= 0 ? '+' : ''}${b}`
        if (mem[f] === undefined) {
          mem[f] = new Set()
        }
        mem[f].add(`[${points[i]}]`)
        mem[f].add(`[${points[j]}]`)
      }
    }
  }
  let ans = 0
  Object.keys(mem).forEach(k => {
    ans = Math.max(ans, mem[k].size)
  })
  return ans
}

console.log(maxPoints([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]))