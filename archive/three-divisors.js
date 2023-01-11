const isThree = function (n) {
  let s = 0
  for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      s++
    }
  }
  if (s === 1) {
    return true
  } else {
    return false
  }
};

console.log(isThree(4))