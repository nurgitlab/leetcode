var flipEquiv = function(root1, root2) {
  function rec(node1, node2) {
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null) {return false}
    if (node1.val !== node2.val) {return false}
    return (rec(node1.left, node2.left) &&
        rec(node1.right, node2.right))||
      (rec(node1.right, node2.left) &&
        rec(node1.left, node2.right))
  }

  return rec(root1, root2)
}