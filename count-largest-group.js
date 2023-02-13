/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  let mem = {}
  for (let i = 1; i <=n; i++) {
    let ls = String(i).split('').reduce((sum, el) => sum+Number(el), 0)
    console.log(i, ls)
    if (mem[ls] === undefined) {mem[ls] = []}
    mem[ls].push(i)
  }


  let maxL = -1
  Object.keys(mem).forEach(k => {
    maxL = Math.max(maxL, mem[k].length)
  })
  console.log(mem)
  let ans = 0
  Object.keys(mem).forEach(k => {
    if (maxL === mem[k].length) {ans++}
  })

  return ans
};