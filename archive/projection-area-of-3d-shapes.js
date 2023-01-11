const projectionArea = function (grid) {
  let vertical = 0
  let left = 0
  let right = 0
  for (let i = 0; i < grid.length; i++) {
    let m1 = 0
    let m2 = 0
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] > 0) {
        vertical += 1
      }
      m1 = Math.max(m1, grid[i][j]) //максимальные по строкам
      m2 = Math.max(m2, grid[j][i])
    }
    left+=m1
    right+=m2
  }

  return vertical + left + right
}

console.log(projectionArea([[1, 2], [3, 4]]))