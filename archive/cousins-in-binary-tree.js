const isCousins = function(root, x, y) {
  let v1 = [] // [s, parent's value]
  let v2 = [] // [s, parent's value]

  function go (node, prev, s) {
    if (node !== null) {
      if (node.val === x) {v1 = [s, prev?.val || -1]}
      if (node.val === y) {v2 = [s, prev?.val || -1]}

      go (node.left, node, s + 1)
      go (node.right, node, s + 1)
    }
  }

  go(root, null, 0)

  if (v1[0] === v2[0] && v1[1]!==v2[1]) {return true}

  return false
}