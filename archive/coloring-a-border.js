/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function(grid, row, col, color) {
  let d = grid[row][col], visited = new Set(), ans = new Set()
  function rec (x, y) {
    if (x >= 0 && x < grid.length && y >= 0 && y < grid[x].length
      && grid[x][y] === d && !visited.has(`${x}-${y}`)) {
      visited.add(`${x}-${y}`)

      if (x === 0 || y === 0 || x === grid.length - 1 ||
        y === grid[x].length - 1) ans.add(`${x}-${y}`)
      if (grid[x - 1] && grid[x - 1][y] !== grid[x][y]) ans.add(`${x}-${y}`)
      if (grid[x + 1] && grid[x + 1][y] !== grid[x][y]) ans.add(`${x}-${y}`)

      if (grid[x][y - 1] !== grid[x][y]) ans.add(`${x}-${y}`)
      if (grid[x][y + 1] !== grid[x][y]) ans.add(`${x}-${y}`)

      rec(x + 1, y)
      rec(x - 1, y)
      rec(x, y + 1)
      rec(x, y - 1)
    }
  }

  rec(row, col)

  let arr = [...ans].forEach(el => {
    let [x, y] = el.split('-').map(r => Number(r))

    grid[x][y] = color
  })
  return grid
};