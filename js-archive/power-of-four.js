var isPowerOfFour = function (n) {
  let ans = false
  for (let i = 0; i < n; i++) {
    if (4 ** i === n) {
      ans = true
      break
    }
    if (4 ** i > n) {
      break
    }
  }

  return ans
};

console.log(isPowerOfFour(16))