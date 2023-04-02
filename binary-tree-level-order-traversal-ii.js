/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let mem = {}

  function rec (node, layer) {
    if (node !== null) {
      if (mem[layer] === undefined) {
        mem[layer] = []
      }

      mem[layer].push(node.val)
      rec(node.left, layer + 1)
      rec(node.right, layer + 1)
    }
  }

  rec(root, 0)

  return Object.values(mem).reverse()
};