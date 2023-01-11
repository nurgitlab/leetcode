const diagonalSort = function(mat) {
  let arr = [1]
  let k = 0
  let mem = {}
  for (let i = mat.length - 1; i >= 0; i--) {
    for (let j = 0; j < mat[0].length; j++) {
      if (arr[k] === undefined) {arr.push(arr[arr.length - 1] + 1)}
      if (mem[arr[k]] === undefined) {
        mem[arr[k]] = [mat[i][j]]
      } else {
        mem[arr[k]].push(mat[i][j])
      }

      mat[i][j] = [mat[i][j], arr[k]]
      k++
    }

    k = mat.length - i
  }
  k = 0

  Object.keys(mem).forEach(k => {
    mem[k].sort((a,b) => a - b)
  })

  for (let i = mat.length - 1; i >= 0; i--) {
    for (let j = 0; j < mat[0].length; j++) {
      mat[i][j] = mem[mat[i][j][1]].pop()
      k++
    }
    k = mat.length - i
  }

  return mat
};

console.log(diagonalSort([[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]))