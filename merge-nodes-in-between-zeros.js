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
var mergeNodes = function(head) {
  let ans = []
  let sum = 0
  while (head) {
    sum+=head.val
    if (head.val === 0 && sum > 0) {
      ans.push(sum)
      sum = 0
    }
    head = head.next
  }

  console.log(ans)

  ans = ans.map(el => new ListNode(el))

  for (let i = 0; i < ans.length - 1; i++) {
    ans[i].next = ans[i + 1]
  }


  return ans[0] || null
};