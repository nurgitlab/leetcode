const numEquivDominoPairs = function(dominoes) {
  let ans = 0
  for (let i = 0; i < dominoes.length - 1; i++) {
    for (let j = i + 1; j < dominoes.length; j++) {
      if (i === j) {continue}
      if (
        dominoes[i][0] === dominoes[j][0] && dominoes[i][1] === dominoes[j][1] ||
        dominoes[i][0] === dominoes[j][1] && dominoes[i][1] === dominoes[j][0]
      ) {ans++}
    }
  }

  return ans
}

console.log(numEquivDominoPairs([[1,2],[1,2],[1,1],[1,2],[2,2]]))