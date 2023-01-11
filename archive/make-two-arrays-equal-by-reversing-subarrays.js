
const canBeEqual = function(target, arr) {
  let mem = {}
  target.forEach(el => {
    if (mem[el] === undefined) {mem[el] = 1} else {mem[el]++}
  })
  arr.forEach(el => {
    if (mem[el] === undefined) {mem[el] = -1} else {mem[el]--}
  })
  let ans = true

  Object.keys(mem).forEach(k => {
    if (mem[k] !== 0) {ans = false}
  })

  return ans
};

console.log(canBeEqual([1,2,3,4], [2,4,1,3]))