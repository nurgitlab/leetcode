const findingUsersActiveMinutes = function(logs, k) {
  let mem = {}
  logs.forEach(el => {
    if (mem[el[0]] === undefined) {
      mem[el[0]] = new Set()
    }
    mem[el[0]].add(el[1])
  })

  let ans = []

  for (let i = 1; i<=k; i++) {
    ans.push(0)
  }

  Object.keys(mem).forEach(kk => {
    ans[mem[kk].size -1]++
  })

  return ans
}

console.log(findingUsersActiveMinutes([[0,5],[1,2],[0,2],[0,5],[1,3]], 5))