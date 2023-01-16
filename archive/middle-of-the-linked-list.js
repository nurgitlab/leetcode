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
var middleNode = function (head) {
  let totalSum = 0

  function goToNext(node, s) {
    if (node !== null) {
      totalSum = s
      goToNext(node.next, s + 1)
    }
  }

  goToNext(head, 0)

  let g = Math.floor((totalSum + 1) / 2)

  function goTo(node, s) {
    if (node !== null) {
      if (s === g) {
        head = node
      } else {
        goTo(node.next, s + 1)
      }
    }
  }

  goTo(head, 0)

  return head
};