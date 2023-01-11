const findLucky = function(arr) {
  let mem = {}
  arr.forEach(n => {
    if (mem[n] === undefined) {mem[n] = 1} else {mem[n]++}
  })

  let ans = -1
  Object.keys(mem).forEach(k => {
    if (Number(k) === mem[k]) {
      ans = Math.max(Number(k))
    }
  })

  return ans
}

console.log(findLucky([2,2,3,4]))