var isPowerOfTwo = function (n) {
  let ans = false
  for (let i = 0; i < n; i++) {
    if (2 ** i === n) {
      ans = true
      break
    }
    if (2 ** i > n) {
      break
    }
  }

  return ans
};

console.log(isPowerOfTwo(16))