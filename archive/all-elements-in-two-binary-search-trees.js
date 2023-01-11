const getAllElements = function (root1, root2) {
  let ans = []

  function toEnd(r) {
    if (typeof r?.val === 'number') {
      ans.push(r.val)

      if (r.left !== null) {
        toEnd(r.left)
      }

      if (r.right !== null) {
        toEnd(r.right)
      }
    }
  }

  toEnd(root1)
  toEnd(root2)
  return ans.sort((a, b) => a - b)
};