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
 * @return {boolean}
 */
const evaluateTree = function (root) {
  function goToNext(node) {
    if (node !== null) {
      if (node.val === 2) {
        return goToNext(node.left) || goToNext(hode.right)
      }

      if (node.val === 3) {
        return goToNext(node.left) && goToNext(hode.right)
      }

      if (node.val === 1) {
        return true
      }

      if (node.val === 0) {
        return false
      }
    }
  }

  return goToNext(root)
};