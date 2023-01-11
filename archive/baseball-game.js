var calPoints = function (ops) {
  let mem = []

  ops.forEach(el => {
    if (el === "C") {
      mem.splice(mem.length - 1)
    } else if (el === "D") {
      if (mem.length > 0) {
        mem.push(mem[mem.length - 1] * 2)
      } else {
        mem.push(0)
      }
    } else if (el === "+") {
      let s = mem[mem.length - 1] + mem[mem.length - 2]
      mem.push(s)
    } else {
      el = Number(el)
      mem.push(el)
    }
  })

  let totalSum = 0

  mem.forEach(el => {
    totalSum += el
  })
  return totalSum
};

console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]))