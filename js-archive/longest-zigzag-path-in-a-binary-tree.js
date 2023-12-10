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
var longestZigZag = function(root) {
  let ans = 0
  function rec(node, counter, prev) {
    if (node === null) return;

    ans = Math.max(counter, ans)

    if (prev === '') {
      rec(node.left, counter + 1, 'left')
      rec(node.right, counter + 1, 'right')
    } else if (prev === 'left') {
      rec(node.left, 1, 'left')
      rec(node.right, counter + 1, 'right')
    } else if (prev === 'right') {
      rec(node.left, counter + 1, 'left')
      rec(node.right, 1, 'right')
    }
  }

  rec(root, 0, '')

  return ans
};