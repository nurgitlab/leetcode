var isUgly = function (n) {
  if (n === 0) {
    return false
  }
  if (n === 1) {
    return true
  } else {
    let d2 = (n % 2 === 0 ? isUgly(n / 2) : false)
    let d3 = (n % 3 === 0 ? isUgly(n / 3) : false)
    let d5 = (n % 5 === 0 ? isUgly(n / 5) : false)

    return (d2 || d3 || d5)
  }
  return false
};

console.log(isUgly(0))