var uniquePathsWithObstacles = function(obstacleGrid) {
  obstacleGrid = obstacleGrid.map(line => line.map(el => el === 1 ? '*' : el))
  if (obstacleGrid[0][0] === '*') return 0

  obstacleGrid[0][0] = 1
  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j< obstacleGrid[i].length; j++) {
      if (obstacleGrid[i][j]==='*') continue
      let a = j > 0 ? obstacleGrid[i][j - 1] : 0, b = i > 0 ? obstacleGrid[i - 1][j] : 0
      if (a === '*') a = 0
      if (b === '*') b = 0

      obstacleGrid[i][j]+=a + b
    }
  }

  console.log(obstacleGrid)

  return obstacleGrid.at(-1).at(-1) === '*' ? 0 : obstacleGrid.at(-1).at(-1)
}