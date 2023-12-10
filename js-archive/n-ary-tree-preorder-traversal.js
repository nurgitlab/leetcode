const preorder = function(root) {
  let ans = []
  function go (node) {
    if (node!==null) {
      ans.push(node.val)
      node.children.forEach(c => go(c))
    }
  }

  go(root)
  return ans
}