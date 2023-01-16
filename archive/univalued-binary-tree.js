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
var isUnivalTree = function(root) {
  let set = new Set()

  function goToNext(node) {
    if (node!== null) {
      set.add(node.val)
      goToNext(node.left)
      goToNext(node.right)
    }
  }

  goToNext(root)

  return set.size === 1
};