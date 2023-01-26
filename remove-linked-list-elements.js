const removeElements = function(head, val) {
  let arr = []
  function go(node) {
    if (node!==null) {
      arr.push(node.val)

      go(node.next)
    }
  }

  go(head)

  arr = arr.filter(el => el!==val)

  for (let i = 0; i < arr.length; i++) {
    let node = new ListNode()
    node.val = arr[i]
    arr[i] = node
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i].next = arr[i+1] || null
  }

  let t = arr[0] || null
  return t
}