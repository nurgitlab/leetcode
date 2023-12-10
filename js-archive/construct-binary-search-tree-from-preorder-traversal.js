/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  function makeNode (vals) {
    if (vals.length === 0) return null;

    let [smaller, larger] = [[], []]

    for (let i = 1; i < vals.length; i++) {
      if (vals[i] > vals[0]) {
        larger.push(vals[i])
      } else {
        smaller.push(vals[i])
      }
    }

    let node = new TreeNode(vals[0], makeNode(smaller), makeNode(larger))

    return node
  }

  return makeNode(preorder)
};