const getKth = function(lo, hi, k) {
  let arr = []

  for (let i = lo; i<=hi; i++) {
    arr.push([i, findPower(i)])
  }

  arr.sort((a,b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0]
    } else {
      return a[1] - b[1]
    }
  })

  return arr[k - 1][0]
}

function findPower (n) {
  let p = 0
  while (n > 1) {
    if (n % 2 === 0) {
      n/=2
      p++
    } else {
      n = n*3+1
      p++
    }
  }

  return p
}

console.log(getKth(12,15,2))