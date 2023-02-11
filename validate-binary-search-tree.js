const isValidBST = function(root, min, max) {
  let ans = true

  function go(node) {
    if (node!==null) {
      let leftArr = go(node.left)
      let rightArr = go(node.right)

      if (leftArr.length > 0 && rightArr.length > 0) {
        if (leftArr[leftArr.length - 1] >= rightArr[0] || rightArr[0]<=node.val || node.val<=leftArr[leftArr.length - 1]) {
          ans = false
        }
      } else if (leftArr.length > 0) {
        if (node.val<=leftArr[leftArr.length - 1]) {
          ans = false
        }
      } else {
        if ( rightArr[0]<=node.val) {
          ans = false
        }
      }
      return [...leftArr, node.val, ...rightArr].sort((a,b) => a - b)
    }

    return []
  }

  go(root)

  return ans
}