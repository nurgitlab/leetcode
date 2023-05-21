/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  function rec(arr) {
    if (arr.length === 0) return null;

    let [max, ind] = [-Infinity, -1]

    arr.forEach((el, i) => {
      if (el > max) {
        max = el
        ind = i
      }
    })

    return new TreeNode (
      arr[ind],
      rec(arr.slice(0, ind)),
      rec(arr.slice(ind + 1))
    )
  }

  return rec(nums)
};