const rangeSumBST = function (root, low, high) {
  let sum = 0

  function goToList(arr) {
    console.log(arr.val)
    if (arr.val === null) {arr.val = 0}
    if (arr.val >= low && arr.val <= high) {
      sum += arr.val
    }

    if (arr.right !== null) {
      goToList(arr.right)
    }

    if (arr.left !== null) {
      goToList(arr.left)
    }
  }

  goToList(root)

  return sum
};