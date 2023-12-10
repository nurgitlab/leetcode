const reverseBits = function (n) {
  n = n.toString(2).split('').reverse().join('').padEnd(32, "0")
  return parseInt(n, 2)
}