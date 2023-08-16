/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function(n, edges, labels) {
  if (n === 1) return [1]
  let graph = {
    //node: []
  }

  edges.forEach(([from, to]) => {
    if (graph[from] === undefined) graph[from] = []
    if (graph[to] === undefined) graph[to] = []

    graph[from].push(to)
    graph[to].push(from)
  })
  let ans = Array(n).fill(1)

  labels = labels.split('').map(el => el.charCodeAt(0) - 87)

  let visited = new Set()
  function rec(node) {
    if (visited.has(node)) return {}
    visited.add(node)

    let r = {}
    r[labels[node]] = 1

    for (let i = 0; i < graph[node].length; i++) {
      let t = rec(graph[node][i])
      Object.keys(t).forEach(k => r[k] === undefined ? r[k] = t[k] : r[k]+=t[k])
    }
    ans[node] = r[labels[node]]
    return r
  }

  rec(0)

  return ans
};