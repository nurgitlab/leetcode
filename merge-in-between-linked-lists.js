/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
  let start2 = list2, end2, start1 = list1, m1, m2, i = 0

  while (list2 !== null) {
    if (list2.next === null) end2 = list2
    list2 = list2.next
  }

  while (list1 !== null) {
    if (i + 1 === a) m1 = list1
    if (i === b) m2 = list1.next

    list1 = list1.next
    i++
  }

  m1.next = start2
  end2.next = m2

  return start1
}