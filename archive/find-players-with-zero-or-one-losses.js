const findWinners = function (matches) {
  let mem = {}


  matches.forEach(arr => {
    if (mem[arr[0]] === undefined) {
      mem[arr[0]] = 0
    }
    if (mem[arr[1]] === undefined) {
      mem[arr[1]] = 1
    } else {
      mem[arr[1]]++
    }
  })

  let ans1 = []
  let ans2 = []

  Object.keys(mem).forEach(k => {
    if (mem[k] === 0) {
      ans1.push(Number(k))
    }
    if (mem[k] === 1) {
      ans2.push(Number(k))
    }
  })
  return [ans1, ans2]
}

console.log(findWinners([[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]))