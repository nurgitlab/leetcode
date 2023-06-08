/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
  let rows = {}, columns = {}
  grid.forEach((line, i) => line.forEach((el, j) => {
    if (el === 0) return

    if (columns[j] === undefined) columns[j] = []
    if (rows[i] === undefined) rows[i] = []

    columns[j].push(i)
    rows[i].push(j)
  }))

  let ans = 0
  console.log(rows, columns)
  grid.forEach((line, i) => line.forEach((el, j) => {
    if (el === 0) return

    if (rows[i].length > 1 || columns[j].length > 1) ans++
  }))

  return ans
}