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
const maxDepth = function (root) {
  let max = 0

  function goToNext(node, s) {
    if (node !== null) {
      s = s + 1
      max = Math.max(s, max)

      goToNext(node.left, s)
      goToNext(node.right, s)

      console.log(node.val, s)
    }
  }

  goToNext(root, 0)

  return max
};