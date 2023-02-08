const levelOrder = function(root) {
  let mem = {}
  function go (node, lvl) {
    if (node!==null) {
      if (mem[lvl] === undefined) {mem[lvl] = []}

      mem[lvl].push(node.val)

      go(node.left, lvl + 1)
      go(node.right, lvl + 1)
    }
  }

  go(root, 0)

  let ans = []

  Object.keys(mem).forEach(k => {
    ans.push(mem[k])
  })

  return ans
}