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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  function goTo (node) {
    if (node!==null) {
      let mem = null
      if (node.left !== null) {
        mem = {...node.left}
      }
      node.left = node.right
      node.right = mem

      goTo(node.left)
      goTo(node.right)
    }
  }

  goTo(root)

  return root
};