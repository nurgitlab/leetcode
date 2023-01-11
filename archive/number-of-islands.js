const numIslands = function (grid) {
  let zeroString = []
  for (let i = 0; i < grid[0].length; i++) {
    zeroString.push('0')
  }
  grid = [zeroString, ...grid, zeroString]
  for (let i = 0; i < grid.length; i++) {
    grid[i] = ['0', ...grid[i], '0']
  }

  let numOfIsland = 0
  function rec(x, y) {
    grid[x][y] = '0'
    if (grid[x + 1][y] === '1') {
      rec(x + 1, y)
    }
    if (grid[x - 1][y] === '1') {
      rec(x - 1, y)
    }
    if (grid[x][y + 1] === '1') {
      rec(x, y + 1)
    }
    if (grid[x][y - 1] === '1') {
      rec(x, y - 1)
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        rec(i, j)
        numOfIsland++
      }
    }
  }

  return numOfIsland
};


console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))