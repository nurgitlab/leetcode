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
var sumEvenGrandparent = function(root) {
  let ans = 0
  function rec(node, pa, grandpa) {
    if (node !== null) {
      if (grandpa!== null && grandpa % 2 === 0) {
        ans+=node.val
      }

      rec(node.left, node.val, pa)
      rec(node.right, node.val, pa)
    }
  }

  rec(root, null, null)

  return ans
};