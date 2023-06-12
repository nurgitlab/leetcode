/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  let ans = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let a = matrix[i - 1] && matrix[i - 1][j - 1] || 0
      let b = matrix[i][j - 1] || 0
      let c = matrix[i - 1] && matrix[i - 1][j] || 0

      matrix[i][j] += matrix[i][j] === 0 ? 0 : Math.min(a,b,c)
      ans+=matrix[i][j]
    }
  }
  console.log(matrix)
  return ans
}

//0 1 1 1
//1 1 2 2
//0 1 2 3

// >1 4
// >2 1