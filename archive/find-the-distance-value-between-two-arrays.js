var findTheDistanceValue = function (arr1, arr2, d) {
  arr2 = arr2.sort((a, b) => (a - b))
  let ans = 0
  for (let i in arr1) {
    if (isValid(arr1[i], d, arr2)) {
      ans++
    }
  }

  return ans
};

function isValid(number, dist, arr) {
  let ans = true
  let l = 0;
  let r = arr.length - 1

  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (Math.abs(arr[mid] - number) <= dist) {
      ans = false
      break
    }

    if (arr[mid] > number) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return ans
}

console.log(findTheDistanceValue(
  [1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3
))