const sumZero = function (n) {
  let ans = []

  if (n % 2 === 0) {
    for (let i = n / 2; i > 0; i--) {
      ans.push(-i)
    }
    for (let i = 1; i <= n / 2; i++) {
      ans.push(i)
    }
  } else {
    let n2 = Math.floor(n/2)
    for (let i = n2; i > 0; i--) {
      ans.push(-i)
    }
    for (let i = 0; i <= n2; i++) {
      ans.push(i)
    }
  }

  return ans
};

console.log(sumZero(7))