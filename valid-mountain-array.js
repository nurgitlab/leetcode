/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = function(arr) {
  if (arr.length < 3) {return false}

  let din = 0
  let toTop = true
  for (let i = 1; i < arr.length; i++) {
    din = arr[i] - arr[i - 1]
    if (toTop) {
      if (arr[i + 1] < arr[i]) {
        toTop = false
      }
      if (din < 1) {
        return false
      }
    } else {
      if (din > -1) {
        return false
      }
    }
  }

  if (toTop) {
    return false
  }

  return true
}