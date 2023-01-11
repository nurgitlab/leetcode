const setZeroes = function (matrix) {
  let si = new Set()
  let sj = new Set()
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        si.add(i)
        sj.add(j)
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    if (si.has(i)) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0
      }
    }
  }

  for (let j = 0; j < matrix[0].length; j++) {
    if (sj.has(j)) {
      for (let i = 0; i < matrix.length; i++) {
        matrix[i][j] = 0
      }
    }
  }

  return matrix
};

console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))