var fib = function (n) {
  let mem = []
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      mem.push(0)
    } else if (i === 1) {
      mem.push(1)
    } else {
      mem.push(mem[i - 1] + mem[i - 2])
    }
  }

  let ans = mem.slice(mem.length - 1).join('')

  return ans
};

console.log(fib(4))