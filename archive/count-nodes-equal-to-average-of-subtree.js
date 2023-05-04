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
var averageOfSubtree = function(root) {
  let counter = 0
  function go(node) {
    if (node === null) {
      return {
        count: 0,
        value: 0
      }
    } else {
      let {count: c1, value: v1} = go(node.left)
      let {count: c2, value: v2} = go(node.right)

      let r = {
        count: c1 + c2 + 1,
        value: v1 + v2 + node.val
      }

      if (node.val === Math.floor(r.value /r.count)) {counter++}
      return r
    }
  }

  console.log(go(root))

  return counter
};