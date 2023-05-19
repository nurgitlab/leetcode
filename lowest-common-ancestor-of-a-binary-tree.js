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
var lowestCommonAncestor = function(root, p, q) {
  let ans = 0

  function rec (node) {
    if (node === null) {return []}

    let childsVal = [...rec(node.left), ...rec(node.right), node.val]

    if (childsVal.includes(p.val) && childsVal.includes(q.val)  && ans === 0) {
      ans = node
    }

    return childsVal
  }

  rec(root)

  return ans
};