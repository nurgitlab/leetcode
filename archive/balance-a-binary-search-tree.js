let balanceBST = function(root) {
  let arr = []

  function rec(node) {
    if (node === null) return;

    arr.push(node.val)
    rec(node.right)
    rec(node.left)
  }

  rec(root)

  arr = arr.sort((a,b) => a - b)

  return createTree(arr)
}

function createTree (arr) {
  if (arr.length === 0) return null;

  let m = Math.floor(arr.length/2)

  return new TreeNode(arr[m], createTree(arr.slice(0, m)), createTree(arr.slice(m + 1)))
}