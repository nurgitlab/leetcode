
const postorder = function(root) {
  let ans = []
  function go (node) {
    if (node!==null) {
      for (let i = 0; i < node.children.length; i++) {
        go(node.children[i])
      }
      ans.push(node.val)
    }
  }

  go(root)

  return ans
}