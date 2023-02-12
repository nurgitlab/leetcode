const isBalanced = function(root) {
  if (root === null) {return true}

  let ans = true
  function go(node) {
    if (node!==null) {
      let left = go(node.left)
      let right = go(node.right)

      if (Math.abs(left - right) > 1) {ans = false}
      let height = Math.max(left, right)

      return height + 1
    }

    return 0
  }
  go(root)

  return ans
};