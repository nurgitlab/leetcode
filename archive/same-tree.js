/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let ans = true
  function next (node1, node2) {
    if (node1 !== null && node2 !== null) {
      if (node1.val !== node2.val) {ans = false}
      if (node1.left !== null  && node2.left!==null) {
        next(node1.left, node2.left)
      } else if (node1.left !== node2.left) {
        ans = false
      }

      if (node1.right !== null  && node2.right!==null) {
        next(node1.right, node2.right)
      } else if (node1.right !== node2.right) {
        ans = false
      }
    } else if (node1 !== node2) {
      ans = false
    }
  }

  next(p,q)

  return ans
};