const maxCoins = function (piles) {
  piles = piles.sort((a, b) => a - b)
  let ans = 0

  for (let i = piles.length / 3; i < piles.length; i += 2) {
    ans += piles[i]
  }

  return ans
}

console.log(maxCoins([2,4,1,2,7,8]))

// 8   2 3 4 5 6 7
//8 + 6   3 4 5
//8 + 6 + 4  -> 18