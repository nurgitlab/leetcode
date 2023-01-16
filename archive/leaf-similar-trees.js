/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  let mem1 = []
  let mem2 = []
  function goToNext (node, b) {
    if (node !== null) {
      if (node.left === null && node.right === null) {
        if (b) {
          mem1.push(node.val)
        } else {
          mem2.push(node.val)

        }
      }
      goToNext(node.left, b)
      goToNext(node.right, b)
    }
  }
  goToNext(root1, true)
  goToNext(root2, false)

  return mem1.join('-') === mem2.join('-')
};