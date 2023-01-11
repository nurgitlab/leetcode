const findJudge = function(n, trust) {
  //judge - судья

  const trusted = {}
  const whoTrust = {}

  for (let i = 1; i <= n; i++) {
    trusted[i] = new Set()
    whoTrust[i] = new Set()
  }

  trust.forEach(v => {
    trusted[v[0]].add(v[1])
    whoTrust[v[1]].add(v[0])
  })

  let potentialJudges = []
  Object.keys(trusted).forEach(v => {
    if (trusted[v].size === 0) {
      potentialJudges.push(v)
    }
  })

  let ans = []

  potentialJudges.forEach(pJudge => {
    if (whoTrust[pJudge].size === n - 1) {
      ans.push(pJudge)
    }
  })

  if (ans.length === 1) {
    return Number(ans[0])
  } else {
    return -1
  }
}


console.log(findJudge(3, [[1,3],[2,3]]))