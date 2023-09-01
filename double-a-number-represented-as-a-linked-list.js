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
var doubleIt = function(head) {
  let arr = []

  while (head) {
    arr.push(head.val)
    head = head.next
  }

  arr = arr.reverse()
  let k = 0
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2 + k
    if (arr[i] > 9) {
      k = 1
      arr[i]%=10
    } else {
      k = 0
    }
  }

  if (k > 0) arr.push(1)
  arr = arr.reverse().map(el => new ListNode(el))

  for (let i = 0; i < arr.length - 1; i++) arr[i].next = arr[i + 1]

  return arr[0]
};