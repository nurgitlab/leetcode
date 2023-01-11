const maxIncreaseKeepingSkyline = function(grid) {
  let maxLine = []
  let maxColumn = []
  for (let i = 0; i < grid.length; i++) {
    let max = - Infinity
    let maxC = -Infinity
    for (let j = 0; j <  grid[i].length; j++) {
      max = Math.max(max, grid[i][j])
      maxC = Math.max(maxC, grid[j][i])
    }
    maxLine.push(max)
    maxColumn.push(maxC)
  }

  let ans = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      ans+=Math.abs(grid[i][j] - Math.min(maxLine[i], maxColumn[j]))
    }
  }

  return ans
}

console.log(maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]))