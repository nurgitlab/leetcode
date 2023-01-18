const isPalindrome = function(head) {
  let ans = []

  function go(node) {
    if (node!==null) {
      ans.push(node.val)
      go(node.next)
    }
  }

  go(head)

  return ans.join('-') === ans.reverse().join('-')
};