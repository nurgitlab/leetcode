const deleteDuplicates = function(head) {
  let mem = {}
  function go(node) {
    if (node!==null) {
      if (mem[node.val] === undefined) {
        mem[node.val] = 1
      } else {
        mem[node.val]++
      }
      go(node.next)
    }
  }
  go(head)

  let arr = []

  Object.keys(mem).forEach(k => {
    if (mem[k] === 1) {arr.push(Number(k))}
  })

  arr = arr.sort((a,b) => a - b)
  console.log(arr)
  function next(node, k) {
    if (node!==null && k < arr.length) {
      node.val = arr[k]
      if (k + 1 < arr.length) {
        next(node.next, k + 1)
      } else {
        node.next = null
      }
    } else {
      node = undefined
    }
  }

  next(head, 0)
  console.log(mem)
  if (arr.length === 0) {return null}
  return head
};