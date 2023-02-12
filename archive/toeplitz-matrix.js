const isToeplitzMatrix = function (matrix) {
  for (let i = 0; i < matrix[0].length; i++) {
    let set = new Set()
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i + j] !== undefined) {
        set.add(matrix[j][i + j])
      }
    }
    console.log(set)
    if (set.size > 1) {
      return false
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    let set = new Set()
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i + j] !== undefined) {
        if (matrix[i + j][j] !== undefined) {
          set.add(matrix[i + j][j])
        }
      }
    }
    console.log(set)
    if (set.size > 1) {
      return false
    }
  }

  return true
}