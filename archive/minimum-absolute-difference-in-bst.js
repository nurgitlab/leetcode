var getMinimumDifference = function(root) {
  let ans = []
  function goTo (node) {
    if (node!==null) {
      ans.push(node.val)
      goTo(node.left)
      goTo(node.right)
    }
  }

  goTo(root)

  ans.sort((a,b) => a - b)
  let r = Infinity
  for (let i = 0; i < ans.length - 1; i++) {
    r = Math.min(r, Math.abs(ans[i] - ans[i + 1]))
  }

  return r
};