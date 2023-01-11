const kthDistinct = function (arr, k) {
  let mem = {}
  arr.forEach(el => {
    if (mem[el] === undefined) {
      mem[el] = 0
    }
    mem[el]++
  })

  for (let i = 0; i < arr.length; i++) {
    if (mem[arr[i]] === 1) {
      k--
    }
    if (k === 0) {
      return arr[i]
    }
  }

  return ""
}

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2))