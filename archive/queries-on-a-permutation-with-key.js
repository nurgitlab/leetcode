var processQueries = function(queries, m) {
  let p = Array(m).fill(0).map(( _,i) => i + 1), ans = []
  console.log(p)
  for (let i = 0; i < queries.length; i++) {
    let ind = p.findIndex(el => el === queries[i])
    ans.push(ind)
    p = [p[ind], ...p.slice(0, ind), ...p.slice(ind + 1)]
  }

  return ans
};