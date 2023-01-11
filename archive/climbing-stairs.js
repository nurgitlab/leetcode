var climbStairs = function (n) {
  let mem = []

  for (let i = n - 1; i >= 0; i--) {
    if (i === n - 1) {
      mem.push(1)
    } else if (i === n - 2) {
      mem.push(2)
    } else {
      let l = mem.length - 1

      mem.push(mem[l] + mem[l - 1])
    }
  }

  return mem[mem.length - 1]
};

console.log(climbStairs(3))

// n = 4

// 2 -> 4
// 3 -> 4