/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
  let localSum = 0, ans = 0
  function rec(x, y) {
    if (x < 0 || x >= grid.length || y <0 || y>= grid[x].length || grid[x][y] === 0) return;
    localSum+=grid[x][y]
    grid[x][y] = 0
    rec(x + 1, y)
    rec(x - 1, y)
    rec(x, y + 1)
    rec(x, y - 1)
  }

  grid.forEach((line, i) => line.forEach((el, j) => {
    if (el === 0) return
    rec(i, j)
    ans = Math.max(ans, localSum)
    localSum = 0
  }))

  return ans
};