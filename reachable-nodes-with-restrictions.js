/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
  let mem = {}
  restricted = new Set(restricted)
  edges.forEach(([from, to]) => {
    if (mem[from] === undefined) {
      mem[from] = []
    }

    if (mem[to] === undefined) {
      mem[to] = []
    }

    mem[from].push(to)
    mem[to].push(from)
  })
  console.log(mem)
  let ans = 0

  function rec(node, visited) {
    if (visited.has(node)) return;

    ans++
    console.log(node, ans)
    if (mem[node]) {
      mem[node].forEach(nextNode => {
        if (!restricted.has(nextNode)) {
          rec(nextNode, visited.add(node))
        }
      })
    }
  }

  rec(0, new Set())

  return ans
};