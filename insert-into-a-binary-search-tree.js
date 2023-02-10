const insertIntoBST = function(root, val) {
  let arr = []

  function go (node) {
    if (node!==null) {
      arr.push(node.val)
      go(node.left)
      go(node.right)
    }
  }

  go(root)
  arr = [...arr, val].sort((a,b) => a - b)

  function rec (a) {
    if (a.length > 0) {
      let m = Math.floor(a.length / 2)
      return new TreeNode(
        a[m],
        rec(a.slice(0, m)),
        rec(a.slice(m + 1))
      )
    } else {
      return null
    }
  }

  return rec(arr)
}