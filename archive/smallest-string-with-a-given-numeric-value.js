const getSmallestString = function(n, k) {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push(1)
  }
  k-=n
  for (let i = 0; i < n; i++) {
    if (k > 0) {
      if (k >= 25) {
        arr[i]+=25
        k-=25
      } else {
        arr[i]+=k
        break
      }
    }
  }

  return arr.map(l => String.fromCharCode(96 + l)).reverse().join('')
}

console.log(getSmallestString(3, 27))

