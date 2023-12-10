const detectCycle = function(head) {
  let mem = null
  function go(node) {
    if (node !== null) {
      if (node.val === '*') {
        mem = node
      } else {
        node.val = '*'

        go(node.next)
      }
    }
  }

  go(head)

  return mem
}