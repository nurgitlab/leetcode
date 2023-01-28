/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = function(root) {
  let mem = {}

  function go (node, s) {
    if (node!==null) {
      if (mem[s] === undefined) {mem[s] = []}

      mem[s].push(node)

      go(node.left, s + 1)
      go(node.right, s + 1)
    }
  }

  go(root, 0)

  Object.keys(mem).forEach(k => {
    for (let i = 0; i < mem[k].length - 1; i++) {
      mem[k][i].next = mem[k][i + 1]
    }
  })

  return root
};