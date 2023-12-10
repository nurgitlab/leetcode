/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  let tar
  function rec(node, route) {
    if (node !== null) {
      console.log(node.val)
      if (isSame(target, node)) {
        tar = route
      } else {
        rec(node.left, [...route, 'left'])
        rec(node.right, [...route, 'right'])
      }
    }
  }
  rec(original, [])

  for (let i = 0; i < tar.length; i++) {
    if (tar[i] === 'right') {
      cloned = cloned.right
    } else if (tar[i] === 'left') {
      cloned = cloned.left
    }
  }

  return cloned
};

function isSame (node1, node2) {
  if (node1 === null && node2 === null) {
    return true
  }

  if (node1 === null || node2 === null) {
    return false
  }

  if (node1.val === node2.val) {
    return isSame(node1.left, node2.left) && isSame(node1.right, node2.right)
  }

  return false
}