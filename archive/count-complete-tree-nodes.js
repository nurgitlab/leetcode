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
var countNodes = function(root) {
  let ans = 0
  function goToNextNode (tree) {
    if (tree.val === null) {
      ans+=0
    } else {
      ans+=1

      if (tree.left !== null) {
        goToNextNode(tree.left)
      }

      if (tree.right !== null) {
        goToNextNode(tree.right)
      }
    }
  }
  if (root === null) {return 0}
  goToNextNode(root)

  return ans
};