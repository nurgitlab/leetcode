const removeLeafNodes = function(root, target) {
  function go (node) {
    if (node!==null) {
      node.left = go(node.left)
      node.right = go(node.right)

      if (node.left === null && node.right === null && node.val === target) {
        return null
      }
      return node
    } else {
      return null
    }
  }
  go(root)

  if (root.val === target && root.left === null && root.right === null) {
    return null
  }
  return root
};