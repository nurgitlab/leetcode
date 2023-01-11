const kthSmallest = function(root, k) {
  let set = new Set()
  function toNextList (arr) {
    if (arr.val !== null) {
      set.add(arr.val)

      if (arr.right !== null) {
        toNextList(arr.right)
      }

      if (arr.left !== null) {
        toNextList(arr.left)
      }
    }
  }

  toNextList(root)

  let arr = [...set]

  arr.sort((a,b) => a - b)

  return arr[k - 1]
}