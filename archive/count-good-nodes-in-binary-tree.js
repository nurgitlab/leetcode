var goodNodes = function(root) {
  let ans = 0
  function goToNext (tree, maxValue) {
    if (tree.val!==null) {
      if (tree.val >= maxValue) {
        ans++
      }
      let max = Math.max(tree.val, maxValue)

      if (tree.right !== null) {
        goToNext(tree.right, max)
      }

      if (tree.left !== null) {
        goToNext(tree.left, max)
      }
    }
  }

  goToNext(root, -Infinity)

  return ans
};