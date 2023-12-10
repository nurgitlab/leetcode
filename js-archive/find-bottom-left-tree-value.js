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
const findBottomLeftValue = function (root) {
  let l = {}

  function go(node, s, isLeft) {
    if (node !== null) {
      console.log(s, node.val)
      if (l[s] === undefined) {
        l[s] = node.val
      }

      go(node.left, s + 1, true)
      go(node.right, s + 1, false)
    }
  }

  go(root, 0, true)

  let arr = []
  Object.keys(l).forEach(k => {
    arr.push([Number[k], l[k]])
  })

  arr = arr.sort((a, b) => a[0] - b[0]).map(el => el[1])

  return arr[arr.length - 1]
  console.log(l)

};