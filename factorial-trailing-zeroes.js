var trailingZeroes = function(n) {
  return Array(6).fill(0).map((_, i) => 5 ** (i + 1)).reduce((s, el) => s+=Math.floor(n / el),0)
}

//2 5 -> 10
//10 20 30 // 3
//15 4 -> 60
//25 4 -> 100

//7
