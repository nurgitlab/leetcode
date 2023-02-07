const hasCycle = function(head) {
  let ans = false
  function go(node) {
    if (node!== null) {
      if (node.val === '*') {
        ans = true
      } else {
        node.val = '*'
        go(node.next)
      }
    }
  }
  go(head)

  return ans
};