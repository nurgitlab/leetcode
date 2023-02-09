const levelOrder = function(root) {
  let mem = {}

  function go (node, s) {
    if (node !== null) {
      if (mem[s] === undefined) {mem[s] = []}
      mem[s].push(node.val)
      for (let i = 0; i < node.children.length; i++) {
        go(node.children[i], s + 1)
      }
    }
  }

  go(root, 0)

  let ans = []

  Object.keys(mem).forEach(k => {
    ans.push(mem[k])
  })

  return ans
}