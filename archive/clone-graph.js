/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(root) {
  let mem = {}, nodes = {}
  function rec(node) {
    if (node === null) return;
    if (mem[node.val] !== undefined) return;
    mem[node.val] = []
    nodes[node.val] = new Node(node.val)

    node.neighbors.forEach(nextNode => mem[node.val].push(nextNode.val))
    node.neighbors.forEach(nextNode => rec(nextNode))
  }

  rec(root)

  Object.keys(nodes).forEach(k => nodes[k].neighbors = mem[k].map(nextNode => nodes[nextNode]))

  return nodes['1']
}