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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
  let [arr, total] = [[], 0]

  function rec (node, change) {
    if (node === null) return;

    if (change) {
      node.val = mem[node.val]
    } else {
      arr.push(node.val)
    }
    rec(node.left, change)
    rec(node.right, change)
  }

  rec(root, false)

  arr = arr.sort((a,b) => a - b)
  total = arr.reduce((s, el) => s + el, 0)

  let mem = {}
  arr.reduce((s, el) => {
    mem[el] = total - s

    return s + el
  }, 0)

  rec(root, true)

  console.log(mem)

  return root
};