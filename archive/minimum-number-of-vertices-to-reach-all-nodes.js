/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
  let set = new Set(edges.flat(Infinity))

  edges.forEach(([_, to]) => {
    if (set.has(to)) {
      set.delete(to)
    }
  })

  return [...set]
};