const mergeTrees = function(root1, root2) {
  function go (node1, node2) {
    if (node1 !== null) {
      if (node2!==null) {
        node1.val+=node2.val

        if (node1.left === null && node2.left!==null) {
          node1.left = {...node2.left}
          node2.left = null

        }

        if (node1.right === null && node2.right!==null) {
          node1.right = {...node2.right}
          node2.right = null
        }

        go(node1.left, node2.left)
        go(node1.right, node2.right)
      }
    }
  }

  if (root1 === null && root2 !== null) {
    root1 = {...root2}
    root2 = null
  }
  go(root1,root2)

  return root1
}