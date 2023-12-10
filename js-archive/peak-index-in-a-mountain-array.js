var peakIndexInMountainArray = function (arr) {
  let l = 1
  let r = arr.length - 2
  let ans
  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
      ans = mid
      break
    } else if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) {
      l = mid + 1
    } else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) {
      r = mid - 1
    }
  }
  return ans
};

console.log(peakIndexInMountainArray([3, 5, 3, 2, 0]))