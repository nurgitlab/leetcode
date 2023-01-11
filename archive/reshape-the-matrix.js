const matrixReshape = function(mat, r, c) {
  if (r * c !== mat.length * mat[0].length) {
    return mat
  }

  let b = []
  for (let i = 0; i < mat.length; i++) {
    b = [...b, ...mat[i]]
  }

  let s= 0
  let ans = []

  for (let i = 0; i < r; i++) {
    ans.push([])
    for (let j = 0; j < c; j++) {
      ans[i].push(b[s])
      s++
    }
  }

  return ans
}

console.log(matrixReshape([[1,2],[3,4]], 1, 4))