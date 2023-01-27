/**
 * @param {number[][]} matrix
 * @return {number}
 */
const minFallingPathSum = function(matrix) {
  matrix = matrix.map(row => {
    row = row.map(el => [el, 0])
    return row
  })

  let d = [Infinity, Infinity]

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[i][j][1] = Math.min(
        matrix[i - 1][j][1] + matrix[i - 1][j][0],
        ((matrix[i - 1][j + 1] || d)[1]) + ((matrix[i - 1][j + 1] || d)[0]),
        ((matrix[i - 1][j - 1] || d)[1]) + ((matrix[i - 1][j - 1] || d)[0])
      )
    }
  }


  let ans = Infinity

  for (let j = 0; j < matrix.length; j++) {
    ans = Math.min(ans, matrix[matrix.length - 1][j][1]  + matrix[matrix.length - 1][j][0])

  }

  console.log(matrix)

  return ans
}