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
var rotateRight = function(head, k) {
  let arr = []

  function next (node) {
    if (node!==null) {
      arr.push(node.val)
      next(node.next)
    }
  }
  next(head)
  arr = rotate(arr, k)
  let j = 0
  function next2 (node) {
    if (node!==null) {
      node.val=arr[j]
      j++
      next2(node.next)
    }
  }
  next2(head)

  return head
};

function rotate (arr, k) {
  k%=arr.length
  if (k === 0) {return arr}
  arr = [...arr.slice(arr.length - k),...arr.slice(0, arr.length - k)]
  return arr
}