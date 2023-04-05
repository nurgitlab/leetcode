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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
  let set = new Set(to_delete)

  let ans = []
  function rec(node, parent) {
    if (node!== null) {
      if (set.has(node.val)) {
        rec(node.left, null)
        rec(node.right, null)
        node = null
      } else {
        if (parent === null) {
          ans.push(node)
        }
        rec(node.left, node)
        rec(node.right, node)
      }
    }
  }

  rec(root, null)

  function r (node) {
    if (node!==null) {
      if (!set.has(node.val)) {
        node.left = r(node.left)
        node.right = r(node.right)

        return node
      }
    }

    return null
  }
  ans = ans.map(node => r(node))

  return ans
};