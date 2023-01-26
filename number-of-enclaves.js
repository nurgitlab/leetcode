const numEnclaves = function(grid) {
  let ans = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        let isHasExit = false
        let s = 0
        function remix(x, y) {
          if (x >= 0 && x < grid.length && y>=0 && y < grid[i].length) {
            if (grid[x][y] === 1) {
              s+=1
              grid[x][y] = '*'
              remix(x + 1, y)
              remix(x - 1, y)
              remix(x, y + 1)
              remix(x, y - 1)
            }
          } else {
            isHasExit = true
          }
        }
        remix(i, j)

        if(!isHasExit) {
          ans+=s
        }
      }
    }
  }

  return ans
};