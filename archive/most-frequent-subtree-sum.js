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
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  let [mem, max] = [{}, -Infinity]

  function rec (node) {
    if (node === null) return 0;

    let sum = rec(node.left) + rec(node.right) + node.val
    if (mem[sum] === undefined) {
      mem[sum] = 1
    } else {
      mem[sum]++
    }

    max = Math.max(mem[sum], max)

    return sum
  }
  rec(root)

  return Object.entries(mem).filter(el => el[1] === max).sort((a,b) => a - b).map(el => Number(el[0]))
};