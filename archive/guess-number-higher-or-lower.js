var guessNumber = function (n) {
  let r = n
  let l = 1
  let ans = -1

  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (guess(mid) === 0) {
      ans = mid
      break
    } else {
      if (guess(mid) === 1) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }

  return ans
};

var guess = function (num) {
  let pick = 6
  if (num === pick) {
    return 0
  } else if (num > pick) {
    return -1
  } else {
    return 1
  }
}

console.log(guessNumber(10))