const minSetSize = function(arr) {
  let mem = {}

  arr.forEach(el => {
    if (mem[el] === undefined) {mem[el] = 0}
    mem[el]++
  })

  let a = []

  Object.keys(mem).forEach(k => {
    a.push([Number(k), mem[k]])
  })

  a = a.sort((a,b) => b[1] - a[1])
  let sum = 0
  let ans = 0

  for (let i = 0; i < a.length; i++) {
    sum+=a[i][1]
    ans++
    if (sum >= (arr.length / 2)) {break}
  }

  return ans
}

console.log(minSetSize([3,3,3,3,5,5,5,2,2,7]))