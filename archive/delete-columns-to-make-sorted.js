const minDeletionSize = function (strs) {
  const matrix = []

  strs.forEach(str => {
    matrix.push(str.split(''))
  })
  let ans = 0
  for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length - 1; i++) {
      if (matrix[i][j].charCodeAt(0) > matrix[i+1][j].charCodeAt(0)) {
        ans++
        break
      }
    }
  }

  return ans
};

console.log(minDeletionSize( ["zyx","wvu","tsr"]))