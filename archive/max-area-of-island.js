const maxAreaOfIsland = function (grid) {
  let zeroString = []
  for (let i = 0; i < grid[0].length; i++) {
    zeroString.push(0)
  }
  grid = [zeroString, ...grid, zeroString]
  for (let i = 0; i < grid.length; i++) {
    grid[i] = [0, ...grid[i], 0]
  }

  let numOfIsland = []
  let sum = 0
  let max = 0
  function rec(x, y) {
    sum += 1
    grid[x][y] = 0
    if (grid[x + 1][y] === 1) {
      rec(x + 1, y)
    }
    if (grid[x - 1][y] === 1) {
      rec(x - 1, y)
    }
    if (grid[x][y + 1] === 1) {
      rec(x, y + 1)
    }
    if (grid[x][y - 1] === 1) {
      rec(x, y - 1)
    }
  }


  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        rec(i, j)
        max = Math.max(sum, max)
        numOfIsland.push(true)
        sum = 0
      }
    }
  }

  return max
};


console.log(maxAreaOfIsland([[0,0,0,0,0,0,0,0]]))