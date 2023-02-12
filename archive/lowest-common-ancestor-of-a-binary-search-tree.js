/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
  let ans = -1
  function go (node) {
    if (node!==null) {
      let isP = node.val === p.val
      let isQ = node.val === q.val
      let arr1 = go(node.left)
      let arr2 = go(node.right)
      console.log(arr1,arr2)
      let toTop = [
        isP || arr1[0] || arr2[0],
        isQ || arr1[1] || arr2[1]
      ]
      console.log(toTop, node.val)
      if (toTop[0] && toTop[1] && ans === -1) {
        ans = node
      }
      return [...toTop]
    } else {
      return [false, false]
    }
  }
  go(root)

  return ans
}