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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  let candidates = []
  function find(node) {
    if (node !== null) {
      if (node.val === subRoot.val) {
        candidates.push(node)
      }
      find(node.left)
      find(node.right)
    }
  }

  find(root)

  return candidates.reduce((acc, el) => {
    if (isEqual(el, subRoot)) {
      return acc || true
    }
    return acc
  }, false)
};


function isEqual(node1, node2) {
  if (node1 === null && node2 === null) {
    return true
  }

  if (node1 === null || node2 === null) {
    return false
  }

  if (node1.val !== node2.val) {
    return false
  }

  return isEqual(node1.left, node2.left) && isEqual(node1.right, node2.right)
}