/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
  let graph = {}, visited = new Set(), ans = 0
  connections.forEach(([a, b]) => {
    if (graph[a] === undefined) graph[a] = []
    if (graph[b] === undefined) graph[b] = []

    graph[a].push(b)
    graph[b].push(a)
  })
  connections = new Set(connections.map(el => el.join('-')))

  function rec(node) {
    if (visited.has(node)) return;
    visited.add(node)
    for (let i = 0; i < graph[node].length; i++) {
      let nextNode = String(graph[node][i])

      if (visited.has(nextNode)) continue
      if (connections.has(node + '-' + nextNode)) ans++
      rec(nextNode)
    }
  }
  rec('0')
  return ans
}