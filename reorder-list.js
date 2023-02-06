const reorderList = function(head) {
  let arr = []
  function go(node) {
    if (node!==null) {
      arr.push(node.val)
      go(node.next)
    }
  }

  go(head)
  let newArr = []

  let [l, r] = [0, arr.length - 1]

  while (l <= r) {

    if (l === r) {
      newArr.push(arr[l])
    } else {
      newArr.push(arr[l], arr[r])
    }

    l+=1
    r-=1
  }

  function gor(node, s) {
    if (node!==null) {
      node.val = newArr[s]
      gor(node.next, s + 1)
    }
  }

  gor(head, 0)

  return head
}