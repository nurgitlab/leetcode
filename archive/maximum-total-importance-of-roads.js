const maximumImportance = function(n, roads) {
  let mem = {}
  let rc = [...roads]
  roads.forEach(([a,b]) => {
    if (mem[a] === undefined) {mem[a] = 0}
    if (mem[b] === undefined) {mem[b] = 0}

    mem[a]++
    mem[b]++
  })
  let arr = []

  Object.keys(mem).forEach(k => {
    arr.push([Number(k), mem[k]])
  })

  arr.sort((a,b) => a[1] - b[1])

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    arr[i] = [arr[i][0], n - arr.length + i + 1]
  }
  let mem2 = {}
  arr.forEach(el => {
    mem2[el[0]] = el[1]
  })

  let ans = 0

  rc.forEach(([a,b]) => {
    ans+=mem2[a] + mem2[b]
  })
  return ans
}

console.log(maximumImportance(5, [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]))