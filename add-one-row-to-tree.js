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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
  function rec(node, lvl, isLeft) {
    if (lvl + 1 === depth) {
      if (isLeft) {
        return new TreeNode(val, node, null)
      } else {
        return new TreeNode(val, null, node)
      }
    } if (node === null) {
      return null
    } else {
      return new TreeNode(node.val, rec(node.left, lvl + 1, true), rec(node.right, lvl + 1, false))
    }
  }

  return rec(root, 0, true)
};