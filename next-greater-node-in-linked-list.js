/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
  let arr = []

  while (head!==null) {
    arr.push(head.val)
    head = head.next
  }

  arr = arr.reverse()
  let max = -Infinity

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i]
      arr[i] = 0
    } else {
      arr[i] = max
    }
  }

  console.log(arr)

  return arr.reverse()
};