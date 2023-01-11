const insertionSortList = function(head) {
  let arr = []

  function next (node) {
    if (node!== null) {
      arr.push(node.val)
      if (node.next!== null) {
        next(node.next)
      }
    }
  }

  next(head)
  arr.sort((a,b) => a - b)
  let m = 0
  function next2 (node) {
    if (node!== null) {
      node.val = arr[m]
      m++
      if (node.next!== null) {
        next2(node.next)
      }
    }
  }

  next2(head)

  return head
};