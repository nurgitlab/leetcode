/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  let graph = {} // from: [to, price]
  equations.forEach(([a, b], i) => {
    if (graph[a] === undefined) graph[a] = {}
    if (graph[b] === undefined) graph[b] = {}

    graph[a][b] = values[i]
    graph[b][a] = 1/values[i]
  })

  function rec(visited, ans, node, finishNode) {
    if (graph[node] === undefined) return -1
    if (visited.has(node)) return -1
    visited.add(node)

    if (node === finishNode) return ans

    let r = -1
    Object.keys(graph[node]).forEach(next => {
      r = Math.max(r, rec(new Set([...visited, node]), ans * graph[node][next], next, finishNode))
    })

    return r
  }
  console.log(graph)

  return queries.map(([start, end]) => rec(new Set(), 1, start, end))
}