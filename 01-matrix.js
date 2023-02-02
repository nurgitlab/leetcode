/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function(mat) {
  let g = mat.length + mat[0].length
  function isValid(x,y) {
    if (x >= 0 && x < mat.length) {
      if (y >= 0 && y < mat[x].length) {
        return true
      }
    }

    return false
  }

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j]!==0) {
        let [a,b] = [g, g]
        if (isValid(i - 1, j)) {
          a = mat[i - 1][j]
        }
        if (isValid(i, j - 1)) {
          b = mat[i][j - 1]
        }
        mat[i][j] = Math.min(a,b) + 1
      }
    }
  }

  for (let i = mat.length - 1; i >= 0; i--) {
    for (let j = mat[i].length - 1; j >= 0; j--) {
      if (mat[i][j]!==0) {
        let [a,b] = [g, g]
        if (isValid(i + 1, j)) {
          a = mat[i + 1][j]
        }
        if (isValid(i, j + 1)) {
          b = mat[i][j + 1]
        }
        mat[i][j] = Math.min(Math.min(a,b) + 1, mat[i][j])
      }
    }
  }
  return mat
}