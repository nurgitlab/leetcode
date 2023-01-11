
const findTarget = function(root, k) {
  let mem = []

  function goToNextNode (tree) {
    if (tree.val !== null) {
      mem = [...mem, tree.val]

      if (tree.right !== null) {
        goToNextNode(tree.right)
      }

      if (tree.left !== null) {
        goToNextNode(tree.left)
      }
    }
  }
  goToNextNode(root)
  let ans = false
  for (let i = 0; i < mem.length; i++) {
    for (let j = 0 ; j < mem.length; j++) {
      if (i !== j) {
        if (mem[i] + mem[j] === k) {
          ans = true
        }
      }
    }
  }

  return ans
};