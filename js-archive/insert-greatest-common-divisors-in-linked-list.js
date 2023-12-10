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
var insertGreatestCommonDivisors = function(head) {
  let arr = [], r = []

  while (head) {
    arr.push(head.val)
    head = head.next
  }

  for (let i = 0; i < arr.length - 1; i++) {
    r.push(arr[i])
    r.push(nod(arr[i], arr[i + 1]))
  }
  r.push(arr[arr.length - 1])

  arr = r.map(el => new ListNode(el))

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1]
  }
  head = arr[0]
  return arr[0]
};

function nod (n1, n2) {
  let max = 1
  for (let i = 2; i <= Math.min(n1, n2); i++) {
    if (n1 % i === 0 && n2 % i === 0) max = i
  }

  return max
}