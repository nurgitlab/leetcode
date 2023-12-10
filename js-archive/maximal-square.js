/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let ans = 0
  matrix = matrix.map(line => line.map(el => Number(el)))

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) continue

      if (i > 0 && j > 0) {
        matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) + 1
      }
      ans = Math.max(ans, matrix[i][j], 1)
    }
  }

  return ans ** 2
}


//["1","1","1","1","0"],
//["1","2","2","2","0"],
//["1","2","3","1","1"],
//["1","1","1","1","1"],
//["0","0","1","1","1"]