const findTilt = function(root) {
  let n = 0
  function go(node) {
    if (node!==null) {
      let leftSum = go(node.left)
      let rightSum = go(node.right)
      let sum = leftSum + rightSum + node.val
      console.log(sum)
      node.val = Math.abs(leftSum - rightSum)
      n+=node.val

      return sum
    } else {
      return 0
    }
  }

  go(root)

  return n
}