const maxCount = function(m, n, ops) {
  if (ops.length === 0) {
    return m * n
  }
  let minX = Infinity
  let minY = Infinity

  ops.forEach(el => {
    minX = Math.min(el[0], minX)
    minY = Math.min(el[1], minY)
  })

  return minX * minY
}

console.log(maxCount(
  3,  3, [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
))