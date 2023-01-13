const countGoodTriplets = function (arr, a, b, c) {
  let set = new Set()

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          set.add(`${i}-${j}-${k}`)
        }
      }
    }
  }

  return set.size
}

console.log(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1))

// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c