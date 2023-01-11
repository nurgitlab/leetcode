const islandPerimeter = function (grid) {

  grid.forEach((el, i) => {
    grid[i] = [0, ...el, 0]
  })

  let s = []
  for (let i = 0; i < grid[0].length; i++) {
    s.push(0)
  }

  grid = [s, ...grid, s]

  let ans = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        if (grid[i - 1][j] === 0) {
          ans++
        }
        if (grid[i + 1][j] === 0) {
          ans++
        }
        if (grid[i][j - 1] === 0) {
          ans++
        }
        if (grid[i][j + 1] === 0) {
          ans++
        }
      }
    }
  }

  return ans
};

console.log(islandPerimeter(
  [[0,0,1]]))