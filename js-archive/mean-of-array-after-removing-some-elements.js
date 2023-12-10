const trimMean = function (arr) {
  arr.sort((a, b) => (a > b ? 1 : -1))

  let n = Math.floor(arr.length / 20)

  let sum = 0
  let m = 0
  for (let i = n; i < arr.length - n; i++) {
    sum += arr[i]
    m += 1
  }
  return sum / m
}

console.log(trimMean([6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4, 3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4]))