const countBits = function (n) {
  let ans = []
  for (let i = 0; i <= n; i++) {
    ans.push(bits(i))
  }

  return ans
}

function bits(n) {
  let s = 0
  while (n > 0) {
    s += n % 2
    n = Math.floor(n / 2)
  }

  return s
}

console.log(countBits(2))