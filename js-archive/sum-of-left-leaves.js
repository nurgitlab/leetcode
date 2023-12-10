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
var sumOfLeftLeaves = function (root) {
  let ans = 0

  function goToNext(node, isLeft) {
    if (node !== null) {
      if (node.left === null && node.right === null) {
        if (isLeft) {
          ans += node.val
        }
      }
      goToNext(node.left, true)
      goToNext(node.right, false)
    }
  }

  goToNext(root, false)

  return ans
};