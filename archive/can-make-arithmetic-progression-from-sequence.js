const canMakeArithmeticProgression = function (arr) {
  if (arr.length === 2) {
    return true
  }

  arr = arr.sort((a, b) => a - b)

  let s = arr[1] - arr[0]

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] !== arr[i] + s) return false
  }

  return true
}

console.log(canMakeArithmeticProgression([3, 5, 1]))