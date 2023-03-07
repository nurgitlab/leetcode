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
var removeNodes = function(head) {
  let arr = []

  while (head) {
    arr.push(head.val)
    head = head.next
  }

  arr = arr.reverse()

  let m = []
  arr.reduce((a, v) => {
    if (v >= a) {
      m.push(v)
      return v
    }

    return a
  }, -Infinity)
  m = m.reverse().map(val => new ListNode(val))

  for (let i = 0; i < m.length - 1; i++) {
    m[i].next = m[i + 1]
  }

  return m[0] || null
};