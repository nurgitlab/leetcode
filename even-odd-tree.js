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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
  let [mem, mat] = [{}, []]

  function rec(node, lvl) {
    if (node === null) return;

    if (mem[lvl] === undefined) {
      mem[lvl] = []
    }

    mem[lvl].push(node.val)

    rec(node.left, lvl + 1)
    rec(node.right, lvl + 1)
  }

  rec(root, 0)

  mat = Object.values(mem)
  for (let i = 0; i < mat.length; i++) {
    if (mat[i][0]% 2 === i % 2) return false
    for (let j = 0; j < mat[i].length - 1; j++) {
      if (i % 2 === 0) {
        if (mat[i][j] >= mat[i][j + 1]) {
          return false
        }

        if (mat[i][j] % 2 === 0 || mat[i][j + 1] % 2 === 0) {
          return false
        }
      } else {
        if (mat[i][j] <= mat[i][j + 1]) {
          return false
        }

        if (mat[i][j] % 2 != 0 || mat[i][j + 1] % 2 != 0) {
          return false
        }
      }
    }
  }

  return true
};