var transpose = function (matrix) {
  let mem = []
  for (let i = 0; i < matrix[0].length; i++) {
    let arr = []
    for (let j = 0; j < matrix.length; j++) {
      arr.push(matrix[j][i])
    }
    mem.push(arr)
  }

  return mem
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))