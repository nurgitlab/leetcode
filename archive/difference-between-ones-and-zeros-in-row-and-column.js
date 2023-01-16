const onesMinusZeros = function(grid) {
  let rows  = []
  let column = []
  grid.forEach((row, i) => {
    row.forEach((el, j) => {
      if (rows[i] === undefined) {rows[i] = {0: 0, 1: 0}}
      if (column[j]===undefined) {column[j]={0: 0, 1: 0}}

      rows[i][el]++
      column[j][el]++
    })
  })

  let diff = []

  for (let i = 0; i < grid.length; i++) {
    let s = []
    for (let j = 0; j < grid[0].length; j++) {
      s.push(rows[i][1] + column[j][1] - rows[i][0] - column[j][0])
    }

    diff.push(s)
  }

  return diff
}

console.log(onesMinusZeros([[0,1,1],[1,0,1],[0,0,1]]))