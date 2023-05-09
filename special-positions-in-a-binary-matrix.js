/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
  let [rows, columns, ans, sum] = [{}, {}, 0, 0]

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      sum+=mat[i][j]
    }

    rows[i] = sum
    sum = 0
  }

  for (let i = 0; i < mat[0].length; i++) {
    for (let j = 0; j < mat.length; j++) {
      sum+=mat[j][i]
    }

    columns[i] = sum
    sum = 0
  }
  console.log(rows,columns)
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1 && rows[i] === 1 && columns[j] === 1) {ans++}
    }
  }

  return ans
};