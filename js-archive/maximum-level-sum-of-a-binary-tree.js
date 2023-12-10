const maxLevelSum = function(root) {
  const mem = {}

  function go (node, l) {
    if (node !== null) {
      if (mem[l] === undefined) {mem[l] = 0}
      mem[l]+=node.val

      go(node.left, l + 1)
      go(node.right, l + 1)
    }
  }

  go(root, 1)

  let maxEl = -Infinity
  let lvl = -1
  Object.keys(mem).forEach(k => {
    if (mem[k] > maxEl) {
      lvl = Number(k)
      maxEl = mem[k]
    }
  })

  return lvl
};