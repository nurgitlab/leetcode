/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function(edges) {
  let mem = {}
  edges.forEach((to, from) => {
    if (mem[to] === undefined) {
      mem[to] = 0
    }

    mem[to]+=from
  })

  console.log(Object.entries(mem))

  return Object.entries(mem).reduce(([maxVal, maxNode], [node, val]) => {
    if (val > maxVal) {
      return [val, node]
    }

    return [maxVal, maxNode]
  }, [-Infinity, -1])[1]
};