/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let arr = []
  function next (node) {
    if (node !== null) {
      arr.push(node.val)
      next(node.next)
    }
  }

  next(head)

  console.log(arr)

  for (let i = 0; i < arr.length; i+=k) {
    if (i + k <= arr.length) {
      let la = []
      for (let j = i; j < i + k; j++) {
        la.push(arr[j])
      }
      la = la.reverse()
      for (let j = i; j < i + k; j++) {
        arr[j] = la[j - i]
      }
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