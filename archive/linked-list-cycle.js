const hasCycle = function(head) {
  let set = new Set()
  function go (node) {
    if (node !== null) {
      if (set.has(node)) {
        return true
      }
      set.add(node)
      return go(node.next)
    } else {
      return false
    }
  }

  return go(head)
};