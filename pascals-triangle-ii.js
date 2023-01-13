const getRow = function(rowIndex) {
  let mat = [1]

  if (rowIndex === 0) {return mat}
  for (let i = 0; i < rowIndex; i++) {
    let a = []
    for (let j = 0; j < mat.length + 1; j++) {
      if (j === 0) {
        a.push(mat[j])
      } else
      if (j === mat.length) {
        a.push(mat[j - 1])
      } else {
        a.push(mat[j] + mat[j-1])
      }
    }
    mat = [...a]
  }

  return mat
};

console.log(getRow(1))