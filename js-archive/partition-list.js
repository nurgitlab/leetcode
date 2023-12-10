let partition = function(head, x) {
  let lower = []
  let higher = []

  while (head !== null) {
    if (head.val < x) {
      lower.push(head.val)
    } else {
      higher.push(head.val)
    }
    head = head.next
  }

  let ans = [...lower, ...higher].map(el => new ListNode(el))
  for (let i = 0; i < ans.length - 1; i++) {
    ans[i].next = ans[i + 1]
  }

  return ans[0] || null
};