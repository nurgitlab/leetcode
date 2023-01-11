const minOperations = function (n) {
  let arr = []
  let sum = 0
  for (let i = 0; i < n; i++) {
    arr[i] = i * 2 + 1
    sum += arr[i]
  }

  let s  = sum / n

  let ans = 0
  arr.forEach(el => {
    ans+=Math.abs(el - s)
  })

  return ans/2
}

console.log(minOperations(3))