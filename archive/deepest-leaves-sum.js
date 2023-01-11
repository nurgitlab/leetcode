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
var deepestLeavesSum = function(root) {
  let maxGl = 0
  let sum = 0

  function goToNext (tree, gl) {
    if (tree.val !== null) {
      if (gl === maxGl) {
        sum+=tree.val
      }
      if (gl > maxGl) {
        sum = tree.val
        maxGl = gl
      }

      if (tree.left !== null) {
        goToNext(tree.left, gl + 1)
      }

      if (tree.right !== null) {
        goToNext(tree.right, gl + 1)
      }
    }
  }

  goToNext(root, 0)
  return sum
};