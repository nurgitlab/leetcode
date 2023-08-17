var findTheCity = function(n, edges, distanceThreshold) {
  let mem = {}

  for (let i = 0; i < n; i++) mem[i] = {
    //next: price
  }

  edges.forEach(([a, b, d]) => {
    mem[a][b] = d
    mem[b][a] = d
  })

  function rec(current, power, visited) {
    if (visited[current] >= power) return visited
    visited[current] = power

    Object.entries(mem[current]).forEach(([next, value]) => {
      if (value <= power) rec(next, power - value, visited)
    })

    return visited
  }

  let ans = -1, min = Infinity

  for (let i = 0; i < n; i++) {
    let val = Object.keys(rec(String(i), distanceThreshold, {})).length - 1
    if (min >= val) {
      min = val
      ans = i
    }
  }

  return ans
}