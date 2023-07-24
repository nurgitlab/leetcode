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
  let stack = [], def = head, ans = []

  while (head !== null) {
    while (stack[stack.length - 1]!== undefined && stack[stack.length - 1].val < head.val) {
      stack[stack.length - 1].val = head.val
      stack.pop()
    }

    stack.push(head)
    head = head.next
  }

  for (let i = 0; i < stack.length; i++) stack[i].val = 0

  while (def !== null) {
    ans.push(def.val)
    def = def.next
  }

  return ans
}