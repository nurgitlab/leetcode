/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
  let [rows, columns] = [{}, {}]

  for (let i = 0; i < grid.length; i++) {
    let column = []
    for (let j = 0; j < grid.length; j++) {
      column.push(grid[j][i])
    }

    if (rows[grid[i].join('-')] === undefined) {
      rows[grid[i].join('-')] = []
    }
    rows[grid[i].join('-')].push(i)

    if (columns[column.join('-')] === undefined) {
      columns[column.join('-')] = []
    }
    columns[column.join('-')].push(i)
  }

  console.log(rows, columns)

  return Object.entries(rows).reduce((sum, [pattern, vals]) => {
    if (columns[pattern] !== undefined) {
      return sum + vals.length * columns[pattern].length
    }

    return sum
  }, 0)
};