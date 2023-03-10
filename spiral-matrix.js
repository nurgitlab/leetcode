const spiralOrder = function(matrix) {
  let ans = []
  let r = 0
  while (matrix.length > 0) {
    let {line, mat} = cut(matrix, r)
    matrix = mat
    console.log(line)
    ans.push(...line)
    r++
  }

  return ans
};

function cut (mat, r) {
  r%=4

  let a = []

  if (r === 0) {
    a = mat.splice(0,1)[0]
  }

  if (r === 2) {
    a = mat.splice(-1, 1)[0].reverse()
  }

  if (r === 1) {
    mat = mat.map(line => {
      a.push(line.splice(-1,1)[0])

      return line
    })

    mat = mat.filter(el => el.length > 0)
  }

  if (r === 3) {
    mat = mat.map(line => {
      a.push(line.splice(0,1)[0])

      return line
    })
    a = a.reverse()
    mat = mat.filter(el => el.length > 0)
  }

  return {
    line: a,
    mat: mat
  }
}