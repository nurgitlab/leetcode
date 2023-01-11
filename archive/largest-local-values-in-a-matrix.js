const largestLocal = function (grid) {
  let ans = []
  for (let i = 1; i < grid.length - 1; i++) {
    ans.push([])
    for (let j = 1; j < grid.length - 1; j++) {
      ans[i - 1].push(Math.max(
        grid[i - 1][j - 1], grid[i - 1][j], grid[i - 1][j + 1],
        grid[i][j - 1], grid[i][j], grid[i][j + 1],
        grid[i + 1][j - 1], grid[i + 1][j], grid[i + 1][j + 1],
      ))
    }
  }

  return ans
}

console.log(largestLocal([[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]]))