const countTriples = function (n) {
  let ans = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {
        if (i*i + j*j === k*k) {
          ans++
        }
      }
    }
  }

  return ans
};

console.log(countTriples(5))