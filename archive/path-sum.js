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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let ans = false

  function goTo(node, sum) {
    if (node !== null && !ans) {
      sum += node.val

      if (node.left === null && node.right === null) {
        if (sum === targetSum) {
          ans = true
        }
      }

      goTo(node.left, sum)
      goTo(node.right, sum)
    }
  }

  goTo(root, 0)

  return ans
};