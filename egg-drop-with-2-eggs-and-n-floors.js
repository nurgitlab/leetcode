const twoEggDrop = function (n) {
  if (n === 1) {
    return 1
  }
  let x = Math.floor(Math.sqrt(n))
  let y = Math.floor(Math.pow(n, 0.25))


  let s = (x + y + 1) * (x + y) / 2
  console.log(x, y, s)

  while (s < n) {
    y += 1
    s = (x + y + 1) * (x + y) / 2
  }

  return x + y
}