const restoreMatrix = function(rowSum, colSum) {
  let matrix = []

  for (let i = 0; i < rowSum.length; i++) {
    let row = []
    for (let j = 0; j < colSum.length; j++) {
      if (rowSum[i] > colSum[j]) {
        row.push(colSum[j])
        rowSum[i]-=colSum[j]
        colSum[j]=0
      } else {
        row.push(rowSum[i])
        colSum[j]-=rowSum[i]
        rowSum[i] = 0
      }
    }

    matrix.push(row)
  }
  return matrix
}

console.log(restoreMatrix([5,7,10], [8,6,8]))