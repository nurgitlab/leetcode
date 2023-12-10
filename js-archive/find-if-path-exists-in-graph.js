/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  let mem = {}

  edges.forEach(([x,y]) => {
    if (mem[x] === undefined) {
      mem[x] = new Set()
    }
    mem[x].add(y)

    if (mem[y] === undefined) {
      mem[y] = new Set()
    }
    mem[y].add(x)
  })

  let ans = false
  function rec(node, visited) {
    if (node === destination) {
      ans = true
    }

    if (!visited.has(node) && mem[node] && !ans) {
      mem[node].forEach(nextNode => {
        rec(nextNode, visited.add(node))
      })
    }
  }

  rec(source, new Set())

  return ans
};