const minimumAbsDifference = function (arr) {
  arr = arr.sort((a, b) => a - b)

  let mem = {}
  let min = Infinity
  for (let i = 0; i < arr.length - 1; i++) {
    let r = arr[i + 1] - arr[i]
    min = Math.min(min, r)
    if (mem[r] === undefined) {
      mem[r] = []
    }

    mem[r].push([arr[i], arr[i + 1]])
  }

  return mem[min]
}

console.log(minimumAbsDifference([4, 2, 1, 3]))