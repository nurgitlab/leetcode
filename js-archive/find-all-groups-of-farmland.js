var findFarmland = function(land) {
  let ans = []
  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[i].length; j++) {
      if (land[i][j] === 0) continue

      let i1 = i, j1 = j
      while (land[i1] && land[i1][j1 + 1] === 1) j1++
      while (land[i1 + 1] && land[i1 + 1][j1] === 1) i1++

      for (let k = i; k <= i1; k++) {
        for (let l = j; l <=j1; l++) {
          land[k][l] = 0
        }
      }

      ans.push([i, j, i1, j1])
    }
  }

  return ans
};