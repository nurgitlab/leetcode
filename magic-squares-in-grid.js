/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  let ans = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (
        grid[i][j - 1] !== undefined &&
        grid[i][j + 1] !== undefined &&
        grid[i - 1] !== undefined &&
        grid[i + 1] !== undefined
      ) {
        let a = grid[i - 1][j - 1],
          b = grid[i - 1][j],
          c = grid[i - 1][j + 1],

          d = grid[i][j - 1],
          e = grid[i][j],
          f = grid[i][j + 1],

          x = grid[i + 1][j - 1],
          y = grid[i + 1][j],
          z = grid[i + 1][j + 1]

        let set = new Set([a,b,c,d,e,f,x,y,z]), isOk = true
        for (let h = 1; h<=9; h++) {
          if (!set.has(h)) isOk = false
        }
        if (!isOk) continue
        if (
          (a + b + c === d + e + f) &&
          (d + e + f === x + y + z) &&
          (a + d + x === b + e + y) &&
          (b + e + y === c + f + z) &&
          (a + z === c + x) && set.size === 9
        ) ans++
      }
    }
  }

  return ans
}