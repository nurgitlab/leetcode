const countSubIslands = function (grid1, grid2) {
  let a = 0
  for (let i = 0; i < grid2.length; i++) {
    for (let j = 0; j < grid2[i].length; j++) {
      let ans = true
      function rec(x, y) {
        if (x >= 0 && x < grid2.length && y >= 0 && y < grid2[0].length) {
          if (grid2[x][y] === 1) {
            if (grid1[x][y] === 1) {
              grid2[x][y] = 7
              rec(x + 1, y)
              rec(x - 1, y)
              rec(x, y + 1)
              rec(x, y - 1)
            } else {
              ans = false
            }
          }
        }
      }
      if (grid2[i][j] === 1) {
        rec(i, j)

        if (ans) {a++}
      }
    }
  }
  console.log(grid2)
  return a
}