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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
  let coordinate = {}

  function rec(x, y, node) {
    if (node === null) return

    if (coordinate[x] === undefined) coordinate[x] = {}
    if (coordinate[x][y] === undefined) coordinate[x][y] = []

    coordinate[x][y].push(node.val)

    rec(x + 1, y + 1, node.right)
    rec(x - 1, y + 1, node.left)
  }

  rec(0, 0, root)

  return Object.entries(coordinate).sort((a,b) => Number(a[0]) - Number(b[0])).map(el => el.slice(1)).map(([obj]) => {
    obj = Object.entries(obj).sort((a,b) => Number(a[0]) - Number(b[0])).map(el => el.slice(1).flat(1).sort((c, d) => c - d)).flat(3)
    return obj
  })


}