var isPerfectSquare = function (num) {
  let l = 0
  let r = num
  let ans = false
  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (mid * mid === num) {
      ans = true;
      break
    } else {
      if (mid * mid > num) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    }
  }

  return ans
};

console.log(isPerfectSquare(0))