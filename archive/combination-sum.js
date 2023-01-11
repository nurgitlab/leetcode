const combinationSum = function (candidates, target) {
  let set = new Set()

  function rec(n, arr) {
    for (let i = 0; i < candidates.length; i++) {
      if (n - candidates[i] === 0) {
        let s = [...arr, candidates[i]].sort((a,b) => a - b)
        set.add(`${s}`)
      } else
      if (n - candidates[i] > 0) {
        rec(n - candidates[i], [...arr, candidates[i]])
      }
    }
  }

  rec(target, [])

  let ans = []
  set.forEach(s => {
    let c = s.split(',')
    for (let i = 0; i < c.length; i++) {
      c[i] = Number(c[i])
    }
    ans.push(c)
  })
  return ans
};

console.log(combinationSum(  [2,3,5], 8))