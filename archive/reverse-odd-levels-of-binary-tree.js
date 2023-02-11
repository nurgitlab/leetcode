const reverseOddLevels = function(root) {
  let mem = {}
  function go (node, s) {
    if (node !== null) {
      s+=1
      if (mem[s] === undefined) {mem[s] = []}
      mem[s].push(node.val)

      go(node.left, s)
      go(node.right, s)
    }
  }

  go(root, 0)

  console.log(mem)

  Object.keys(mem).forEach(k => {
    mem[k] = mem[k].reverse()
  })

  function gor(node, s) {
    if (node!==null) {
      s+=1
      //    console.log(s)
      if (s % 2 === 0) {
        console.log(mem[s])
        node.val = mem[s][0]
        mem[s] = mem[s].slice(1)
      }
      gor(node.left, s)
      gor(node.right, s)
    }
  }

  gor(root, 0)

  console.log(mem)

  return root
}