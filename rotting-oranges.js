const orangesRotting = function (grid) {
  let ans = -1
  let isGoNext = true
  while (
    isGoNext
    ) {
    isGoNext = false
    ans++
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 2) {
          if (i + 1 >= 0 && i + 1 < grid.length) {
            if (j >= 0 && j < grid[i].length) {
              if (grid[i + 1][j] === 1) {
                grid[i + 1][j] = -2
                isGoNext = true
              }
            }
          }

          if (i - 1 >= 0 && i - 1 < grid.length) {
            if (j >= 0 && j < grid[i].length) {
              if (grid[i - 1][j] === 1) {
                grid[i - 1][j] = -2
                isGoNext = true
              }
            }
          }

          if (i >= 0 && i < grid.length) {
            if (j + 1 >= 0 && j + 1 < grid[i].length) {
              if (grid[i][j + 1] === 1) {
                grid[i][j + 1] = -2
                isGoNext = true
              }
            }
          }

          if (i >= 0 && i < grid.length) {
            if (j - 1 >= 0 && j - 1 < grid[i].length) {
              if (grid[i][j - 1] === 1) {
                grid[i][j - 1] = -2
                isGoNext = true
              }
            }
          }
        }
      }
    }

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        grid[i][j] = Math.abs(grid[i][j])
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        return -1
      }
    }
  }

  return ans
}