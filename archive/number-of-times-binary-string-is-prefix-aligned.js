var numTimesAllBlue = function(flips) {
  let sum = 0, mostRight = -1, ans = 0

  for (let i = 0; i < flips.length; i++) {
    let f = flips[i] - 1
    if (f > mostRight) mostRight = f
    sum++

    if (sum === mostRight + 1) ans++
  }

  return ans
}