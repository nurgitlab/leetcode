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
var sumNumbers = function(root) {
  let ans = 0

  function rec(node, route) {
    if (node !== null) {
      if (node.left === null && node.right === null) {
        ans+=Number(route + node.val)
      } else {
        rec(node.left, route + node.val)
        rec(node.right, route + node.val)
      }
    }
  }

  rec(root, '')

  return ans
};