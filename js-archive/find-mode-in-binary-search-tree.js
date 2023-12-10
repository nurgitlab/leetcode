const findMode = function(root) {
  let mem = {}

  let max = -1
  function go(node) {
    if (node!==null) {
      let el = node.val
      if (mem[el] === undefined) {mem[el] = 0}
      mem[el]+=1
      max = Math.max(max, mem[el])

      go(node.left)
      go(node.right)
    }
  }

  go(root)

  let ans = []

  Object.keys(mem).forEach(k => {
    if (mem[k] === max) {
      ans.push(Number(k))
    }
  })

  return ans
}