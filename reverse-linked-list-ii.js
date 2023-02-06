const reverseBetween = function(head, left, right) {
  let arr = []

  function go(node) {
    if (node!==null) {
      arr.push(node.val)
      go(node.next)
    }
  }

  go(head)

  arr = [...arr.slice(0, left - 1), ...arr.slice(left - 1,right).reverse(), ...arr.slice(right)]

  function gor(node, s) {
    if (node!==null) {
      node.val = arr[s]
      gor(node.next, s + 1)
    }
  }

  gor(head, 0)


  return head
}