const preorderTraversal = function(root) {
  let arr = []

  function go (node) {
    if (node!==null) {
      arr.push(node.val)
      go(node.left)
      go(node.right)
    }
  }

  go(root)

  return arr
}