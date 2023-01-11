const minPathSum = function (grid) {
  let n = grid.length - 1
  let m = grid[n].length - 1

  let mem = []

  for (let i = 0; i <= n; i++) {
    mem.push([])
  }

  const goToNextCoordinate = (x, y, sum) => {
    if (x === n && y === m) {
      if (mem[x][y] === undefined) {
        mem[x][y] = sum + grid[x][y]
      } else {
        mem[x][y] = Math.min(mem[x][y], sum + grid[x][y])
      }
    } else {
      if (mem[x][y] === undefined) {
        mem[x][y] = sum + grid[x][y]
        if (x < n) {
          goToNextCoordinate(x + 1, y, mem[x][y])
        }
        if (y < m) {
          goToNextCoordinate(x, y + 1, mem[x][y])
        }
      } else {
        if (mem[x][y] > sum + grid[x][y]) {
          mem[x][y] = sum + grid[x][y]
          if (x < n) {
            goToNextCoordinate(x + 1, y, mem[x][y])
          }
          if (y < m) {
            goToNextCoordinate(x, y + 1, mem[x][y])
          }
        }
      }
    }
  }

  goToNextCoordinate(0, 0, 0)

  return mem[n][m]
};

console.log(minPathSum([[1,2],[5,6],[1,1]]))