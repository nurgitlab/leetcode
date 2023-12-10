/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
const findRotation = function(mat, target) {
  let a = rotate(mat)
  let b = rotate(a)
  let c = rotate(b)
  let d = rotate(c)

  return (
    isEq(a, target) ||
    isEq(b, target) ||
    isEq(c, target) ||
    isEq(d, target)
  )
}

function rotate (mat) {
  let ans = []
  for (let j = 0; j < mat[0].length; j++) {
    let column = []
    for (let i = 0; i < mat.length; i++) {
      column.push(mat[i][j])
    }
    ans.push(column.reverse())
  }

  return ans
}

function isEq (mat1, mat2) {
  for (let i = 0; i < mat1.length; i++) {
    for (let j = 0; j < mat1.length; j++) {
      if (mat1[i][j]!==mat2[i][j]) {
        return false
      }
    }
  }

  return true
}