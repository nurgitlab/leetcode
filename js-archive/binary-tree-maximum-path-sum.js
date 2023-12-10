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
 * @return {number}
 */
var maxPathSum = function(root) {
  let ans = -Infinity

  function rec(node) {
    if (node === null) return -Infinity
    let l = rec(node.left), r = rec(node.right)
    let max = Math.max(node.val, l + node.val, r + node.val)
    ans = Math.max(ans, max, l + r + node.val)
    return max
  }

  rec(root)

  return ans
}