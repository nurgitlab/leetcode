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
var subtreeWithAllDeepest = function(root) {
  let [mem, maxDeep] = [{}, 0]

  function rec(node, deep) {
    if (node === null) return;
    maxDeep = Math.max(deep, maxDeep)
    if (mem[deep] === undefined) {mem[deep] = 0}
    mem[deep]++

    rec(node.left, deep + 1)
    rec(node.right, deep + 1)
  }

  rec(root, 0)
  let ans
  function findNode (node, deep) {
    if (node === null) return 0

    if (deep === maxDeep && mem[maxDeep] === 1) {
      ans = node
      return 0
    } else if (deep === maxDeep) {
      return 1
    }

    let sumOfDeepest = findNode(node.left, deep + 1) + findNode(node.right, deep + 1)

    if (sumOfDeepest === mem[maxDeep]) {
      ans = node
      sumOfDeepest = 0
    }

    return sumOfDeepest
  }

  findNode(root, 0)

  return ans
};