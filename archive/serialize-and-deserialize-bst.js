/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {

  function rec (node) {
    if (node === null) return []

    return [node.val, ...rec(node.left), ...rec(node.right)]
  }

  return JSON.stringify(rec(root))
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  function createBST(arr) {
    if (arr.length === 0) return null

    let smaller = [], bigger = []
    for (let i = 1; i < arr.length; i++) {
      if (arr[0] > arr[i]) {smaller.push(arr[i])} else {
        bigger.push(arr[i])
      }
    }
    return new TreeNode(arr[0], createBST(smaller), createBST(bigger))
  }

  return createBST(JSON.parse(data))
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */