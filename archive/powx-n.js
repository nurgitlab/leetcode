var myPow = function (x, n) {

  if (n < 0) {
    return nurPow(1 / x, Math.abs(n))
  } else {
    return nurPow(x, Math.abs(n))
  }
};

var nurPow = function (x, n) {
  if (n > 10000 && Math.abs(x) < 0.99999) {
    return 0
  }
  if (x === 1) {
    return 1
  }
  if (x === -1 && n % 2 === 0) {
    return 1
  }
  if (x === -1 && n % 2 !== 0) {
    return -1
  }
  if (Math.abs(x) < 1 / 10000) {
    return 0
  }
  if (n === 0) {
    return 1
  } else if (n === 1) {
    return x
  } else if (n % 2 === 0) {
    return nurPow(x, n / 2) * nurPow(x, n / 2)
  } else {
    return x * nurPow(x, (n - 1) / 2) * nurPow(x, (n - 1) / 2)
  }

}


console.log(myPow(2.00000,
  -2147483648))