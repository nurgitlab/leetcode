const matrixBlockSum = function (mat, k) {
  let ans = []
  for (let i = 0; i < mat.length; i++) {
    ans.push([])
    for (let j = 0; j < mat[i].length; j++) {
      let ls = 0

      for (let r = i - k; r <= i + k; r++) {
        for (let c = j - k; c <= j + k; c++) {
          if ((r >= 0 && r < mat.length) && (
            c >= 0 && c < mat[i].length
          )) {
            ls+=mat[r][c]
          }
        }
      }

      ans[i][j] = ls
    }
  }

  return ans
};

console.log(matrixBlockSum([[1,2,3],[4,5,6],[7,8,9]], 2))