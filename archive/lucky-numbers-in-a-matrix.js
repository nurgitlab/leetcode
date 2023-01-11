const luckyNumbers  = function(matrix) {
  let mem = {}

  for (let i = 0; i < matrix.length; i++) {
    let min = Infinity
    let minIndex = -1
    for (let j = 0; j < matrix[i].length; j++) {
      if (min > matrix[i][j]) {
        min = matrix[i][j]
        minIndex = j
      }
    }

    mem[`${i}, ${minIndex}`] = min
  }

  let ans = []

  for (let i = 0; i < matrix[0].length; i++) {
    let max = -Infinity
    let maxIndex = -1
    for (let j = 0; j < matrix.length; j++) {
      if (max < matrix[j][i]) {
        max = matrix[j][i]
        maxIndex = j
      }
    }
    if (mem[`${maxIndex}, ${i}`] !== undefined) {
      ans.push(max)
    }
  }

  return ans
};

console.log(luckyNumbers([[7,8],[1,2]]))