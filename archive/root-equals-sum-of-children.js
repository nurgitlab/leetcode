const checkTree = function(root) {
  return (root.val === root.right.val + root.left.val)
};