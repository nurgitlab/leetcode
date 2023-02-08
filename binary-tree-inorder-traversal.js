const inorderTraversal = function(root) {
  function goToNext(node) {
    if (node!==null) {
      return [...goToNext(node.left), node.val, ...goToNext(node.right)]
    } else {
      return []
    }
  }

  return goToNext(root)
}