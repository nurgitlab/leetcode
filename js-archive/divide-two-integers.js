var divide = function (dividend, divisor) {
  if (divisor === -1 && dividend === -2147483648) {
    return 2147483647
  }
  if ((dividend >= 0 && divisor >= 0) ||
    (dividend <= 0 && divisor <= 0)) {
    return Math.floor(dividend / divisor)
  } else {
    let res1 = Math.floor(dividend / divisor)
    let res2 = dividend / divisor

    if (res1 < res2) {
      res1++
    }
    return res1
  }
};

console.log(divide(7, -3))