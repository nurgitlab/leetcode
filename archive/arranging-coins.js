const arrangeCoins = function(n) {
  let start = 1
  let count = 0
  while (n >= start) {
    n-=start
    start++
    count++
  }

  return count
}

console.log(arrangeCoins(8))