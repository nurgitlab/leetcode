const carPooling = function(trips, capacity) {
  trips.sort((a,b) => a[1] - b[1])

  let mem = {}

  trips.forEach(([o,b,f]) => {
    for (let i = b; i < f; i++) {
      if (mem[i] === undefined) {
        mem[i] = 0
      }
      mem[i]+=o
    }
  })

  let ans = true

  Object.keys(mem).forEach(k => {
    if (mem[k] > capacity) {
      ans = false
    }
  })

  return ans
}

console.log(carPooling([[2,1,5],[3,3,7]] , 4))