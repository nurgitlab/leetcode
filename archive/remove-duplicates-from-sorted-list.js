const deleteDuplicates = function(head) {
  let arr = []

  function go(node) {
    if (node!==null) {
      arr.push(node.val)
      go(node.next)
    }
  }

  go(head)

  let na = []

  for (let i = 0; i < arr.length; i++){
    na.push(arr[i])
    while (arr[i] === arr[i + 1]) {
      i++
    }
  }

  function gor (node,s) {
    if (node!==null) {
      if (s < na.length) {
        node.val = na[s]
        if (s + 1 < na.length) {
          gor(node.next, s + 1)
        } else {
          node.next = null
        }
      } else {
        node = null
      }
    }
  }

  gor(head, 0)
  console.log(na)

  return head
};