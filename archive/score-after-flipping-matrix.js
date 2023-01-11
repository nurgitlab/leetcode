const matrixScore = function(grid) {
  for (let i = 0; i < grid.length; i++) {
    if (grid[i][0]===0) {
      grid[i] = rebuild(grid[i])
    }
  }

  for (let j = 0; j < grid[0].length; j++) {
    let s = 0
    let z = 0
    for (let i = 0; i < grid.length; i++) {
      if (grid[i][j]===1) {s++} else {z++}
    }
    if (z > s) {
      for (let i = 0; i < grid.length; i++) {
        if (grid[i][j]===1) {
          grid[i][j]=0
        } else {
          grid[i][j]=1
        }
      }
    }
  }

  let ans = 0
  for (let i = 0; i < grid.length; i++) {
    ans+=arrToNum(grid[i])
  }
  return ans
}

function rebuild (arr) {
  return arr.map(el => el === 1 ? 0 : 1)
}

function arrToNum (arr) {
  let ans = 0
  for (let i = 0; i < arr.length; i++) {
    ans+= Math.pow(2, arr.length - 1 - i) * arr[i]
  }

  return ans
}

console.log(matrixScore([[0,0,1,1],[1,0,1,0],[1,1,0,0]]))