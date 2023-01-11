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
const sortList = function (head) {
  let arr = []

  function goTo(node) {
    if (node !== null) {
      arr.push(node.val)
      if (node.next !== null) {
        goTo(node.next)
      }
    }
  }

  goTo(head)
  arr = arr.sort((a, b) => a - b)
  let k = 0
  console.log(arr)

  function change(node) {
    if (node !== null) {
      node.val = arr[k]
      k++
      if (node.next !== null) {
        change(node.next)
      }
    }
  }

  change(head)

  return head
};