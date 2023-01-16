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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  function goToNext(node) {
    if (node!==null) {
      return [...goToNext(node.left), ...goToNext(node.right), node.val]
    } else {
      return []
    }
  }

  return goToNext(root)
}