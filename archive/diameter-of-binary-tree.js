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
var diameterOfBinaryTree = function(root) {
  let max = 0
  function goToNext (node, g) {
    if (node!==null) {
      g+=1
      let l = goToNext(node.left, g) - g
      let r = goToNext(node.right, g) - g
      console.log(l, r, node.val)
      max = Math.max(max, l + r)
      return g + Math.max(l, r)
    } else {
      return g
    }
  }

  goToNext(root,  0)

  return max
};