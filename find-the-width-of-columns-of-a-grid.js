/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
  let columns = {}

  grid.forEach((row, i) => {
    row.forEach((el, j) => {
      if (columns[j] === undefined) {
        columns[j] = 0
      }

      columns[j] = Math.max(String(el).length, columns[j])
    })
  })

  return Object.values(columns)
};