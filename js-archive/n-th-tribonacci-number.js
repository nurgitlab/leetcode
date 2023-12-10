var tribonacci = function (n) {
  let mem = []
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      mem.push(0)
    } else if (i === 1) {
      mem.push(1)
    } else if (i === 2) {
      mem.push(1)
    } else {
      let l = mem.length - 1
      mem.push(mem[l] + mem[l - 1] + mem[l - 2])
    }

    if (mem.length > 4) {
      let l = mem.length - 1
      mem = [mem[l - 2], mem[l - 1], mem[l]]
    }
  }
  return mem[mem.length - 1]
};

console.log(tribonacci(25))