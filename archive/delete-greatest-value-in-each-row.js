const deleteGreatestValue = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].sort((a, b) => a - b)
  }

  let ans = 0

  for (let i = 0; i < grid[0].length; i++) {
    let max = -Infinity
    for (let j = 0; j < grid.length; j++) {
      max = Math.max(max, grid[j][i])
    }
    ans += max
  }

  return ans
}

console.log(deleteGreatestValue([[1, 2, 4], [3, 3, 1]]))