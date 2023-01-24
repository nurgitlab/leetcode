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
var deleteDuplicates = function (head) {
  function goTo(node, prev) {
    if (node !== null) {
      console.log(prev, node)
      if (prev !== null) {
        if (prev.val === node.val) {
          prev.next = node.next
        }
      }
      goTo(node.next, node)
    }
  }

  goTo(head, null)

  return head
};

JSON.stringify()