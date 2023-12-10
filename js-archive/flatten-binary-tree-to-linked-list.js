const flatten = function(root) {
  let ans = []
  function goTo(node) {
    if (node!==null) {
      ans.push(node)
      goTo(node.left)
      goTo(node.right)
    }
  }

  goTo(root)

  for (let i = 0; i < ans.length; i++) {
    if (i + 1 < ans.length) {
      ans[i].right = ans[i + 1]
      ans[i].left = null
    } else {
      ans[i].left = null
      ans[i].right = null
    }
  }
};