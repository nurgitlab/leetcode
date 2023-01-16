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
 * @return {string}
 */
var tree2str = function(root) {
  function goTo (node) {
    if (node!== null) {
      let r = node.val + ''
      if (node.left!== null) {
        r+='(' + goTo(node.left) + ')'
      }
      if (node.right!== null) {
        if (node.left=== null) {
          r+='()'
        }
        r+='(' +goTo(node.right)+ ')'
      }
      return r
    }else {
      return ''
    }
  }

  return goTo(root)
};