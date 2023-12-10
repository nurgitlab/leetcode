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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let ans = []

  function goTo(node, road) {
    if (node !== null) {
      road = [...road, node.val]
      if (node.left === null && node.right === null) {
        ans.push(road.join('->'))
      }
      goTo(node.left, road)
      goTo(node.right, road)
    }
  }

  goTo(root, [])

  return ans
};