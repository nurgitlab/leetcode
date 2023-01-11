const pivotInteger = function(n) {
  if (n <=1) {return 1}
  let m = []

  for (let i = 1; i <= n; i++) {
    if (m.length > 0) {
      m.push(m[m.length -1] + i)
    } else {
      m.push(i)
    }
  }

  for (let i = 1; i <=n; i++) {
    if (m[i] === m[m.length - 1] - m[i] + i + 1) {
      return i + 1
    }
  }

  return -1
}

console.log(pivotInteger(8))