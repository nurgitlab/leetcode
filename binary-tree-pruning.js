const pruneTree = function(root) {
  function go (node) {
    if (node!==null) {
      if (go(node.left) === 0) {
        node.left = null
      }

      if (go(node.right) === 0) {
        node.right = null
      }

      return node.val + go(node.left) + go(node.right)
    } else {
      return 0
    }
  }

  go(root)

  if (root.left === null && root.right === null && root.val === 0) {
    return null
  }
  return root
}