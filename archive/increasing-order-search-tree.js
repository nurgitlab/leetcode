const increasingBST = function(root) {
  let arr = []
  function goTo (node) {
    if (node!==null) {
      arr.push(node.val)
      goTo(node.left)
      goTo(node.right)
    }
  }

  goTo(root)

  arr.sort((a,b) => a - b)
  arr = arr.map(el => new TreeNode(el, null, null))

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].right = arr[i + 1]
  }

  return arr[0]
}