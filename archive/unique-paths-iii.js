
const uniquePathsIII = function(grid) {
  let ans = 0
  let free = 0
  let [x, y] = [-1,-1]

  grid.forEach((str, i) => str.forEach((el, j) => {
    if (el === 1) {
      x=i
      y=j
    }

    if (el !== -1) {free++}
  }))
  free-=1

  function goTo(table, x, y, counter) {
    table = JSON.parse(JSON.stringify(table))
    if (x >= 0 && x < table.length && y>=0 && y < table[0].length) {
      if (table[x][y] === 2) {
        if (counter === free) {ans++}
      }
      if (table[x][y] !== -1) {
        table[x][y] = -1
        goTo(table, x + 1, y, counter+1)
        goTo(table, x - 1, y, counter+1)
        goTo(table, x, y + 1, counter+1)
        goTo(table, x, y - 1, counter+1)
      }
    }
  }

  goTo(grid, x, y, 0)

  return ans
}



console.log(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,0,2]]))