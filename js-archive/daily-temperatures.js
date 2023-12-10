const dailyTemperatures = function (temperatures) {
  let mem = {}

  temperatures.forEach((day, index) => {
    if (mem[day] === undefined) {
      mem[day] = [index]
    } else {
      mem[day].push(index)
    }
  })
  let ans = []

  for (let i = 0; i < temperatures.length; i++) {
    let lowest = Infinity
    for (let k in mem) {
      if (Number(k) > temperatures[i]) {
        mem[k].forEach(index => {
          if (index < lowest && index > i) {
            lowest = index
          }
        })
      }
    }
    if (lowest === Infinity) {
      ans.push(0)
    } else {
      ans.push(lowest - i)
    }
  }
  return ans
}
//TIME LIMIT!

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))