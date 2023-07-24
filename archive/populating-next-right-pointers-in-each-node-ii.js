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
var connect = function(root) {
  let mem = {}

  function rec(l, node) {
    if (node === null) return;

    if (mem[l] === undefined) mem[l] = []
    mem[l].push(node)

    rec(l + 1, node.left)
    rec(l + 1, node.right)
  }

  rec(0, root)

  Object.values(mem).forEach(arr => {
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i].next = arr[i + 1]
    }
  })

  return root
};