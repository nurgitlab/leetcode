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
var swapNodes = function(head, k) {
  let arr = []
  let dh = head
  while(head) {
    arr.push(head.val)
    head = head.next
  }

  let b = arr[k - 1]
  arr[k - 1] = arr[arr.length - k]
  arr[arr.length - k] = b

  arr = arr.map(el => new ListNode(el))

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1]
  }

  return arr[0] || null
};