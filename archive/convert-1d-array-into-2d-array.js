const construct2DArray = function(original, m, n) {
  if (n * m !== original.length) {
    return []
  }
  let ans = []
  for (let i = 0; i < m; i++) {
    let local = []
    for (let j = 0; j < n; j++) {
      let currId = i * n + j
      console.log(currId)
      local.push(original[currId])
    }
    ans.push(local)
  }

  return ans
};

console.log(construct2DArray([1,1,1,1], 4, 1))