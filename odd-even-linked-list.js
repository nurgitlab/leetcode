const oddEvenList = function(head) {
  let arr = []

  while(head) {
    arr.push(head.val)
    head = head.next
  }

  let r1 = []
  let r2 = []

  arr.forEach((el, i) => {
    if (i % 2 === 0) {
      r1.push(el)
    } else {
      r2.push(el)
    }
  })

  let r = [...r1, ...r2].map(el => new ListNode(el))

  for (let i = 0; i < r.length - 1; i++) {
    r[i].next = r[i + 1]
  }

  return r[0] || null
};