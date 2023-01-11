/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let arr = []
  function next (node) {
    if (node !== null) {
      arr.push(node.val)
      next(node.next)
    }
  }

  next(head)

  console.log(arr)

  for (let i = 0; i < arr.length; i+=2) {
    if (i + 1 < arr.length) {
      let c = arr[i]
      arr[i] = arr[i+1]
      arr[i + 1] = c
    }
  }

  console.log(arr)
  let i = 0

  function next2 (node) {
    if (node !== null) {
      node.val = arr[i]
      i++

      next2(node.next)
    }
  }

  next2(head)

  return head
};