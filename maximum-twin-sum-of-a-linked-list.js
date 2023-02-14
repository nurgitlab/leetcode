const pairSum = function(head) {
  let arr = []

  function go(node) {
    if (node!== null) {
      arr.push(node.val)
      go(node.next)
    }
  }

  go(head)

  let ans = 0

  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    ans = Math.max(ans, arr[i] + arr[arr.length - 1 - i])
  }

  return ans
}