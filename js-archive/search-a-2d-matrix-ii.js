/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let [i, j] = [0, matrix[0].length - 1]

  while (i < matrix.length && j >=0) {
    if (matrix[i][j] === target) {
      return true
    }
    if (matrix[i][j] > target) {
      j--
    } else {
      i++
    }
  }

  return false
};