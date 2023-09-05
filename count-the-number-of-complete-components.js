/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
  let graph = {}

  for (let i = 0; i < n; i++) graph[i] = new Set()
  edges.forEach(([n1, n2]) => {
    graph[n1].add(n2)
    graph[n2].add(n1)
  })

  function rec (node, visited) {
    if (visited.has(node)) return []
    visited.add(node)
    let ans = [node]
    let arr = [...graph[node]].forEach(next => {
      ans = [...ans, ...rec(next, visited)]
    })
    return ans
  }

  let ans = 0

  for (let i = 0; i < n; i++) {
    if (graph[i] === undefined) continue

    let nodes = rec(i, new Set()), a = true
    for (let j = 0; j < nodes.length; j++) {
      if (graph[nodes[j]].size !== nodes.length - 1) a = false
      delete graph[nodes[j]]
    }

    if (a) ans++
  }

  return ans
}