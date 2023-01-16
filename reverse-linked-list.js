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
const reverseList = function(head) {
  let lastNode = head
  function goToNext (node, prev) {
    if (node!==null) {
      lastNode = node
      goToNext(node.next, node)
      node.next = prev
    }
  }

  goToNext(head, null)

  return lastNode
};