/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const findSecondMinimumValue = function(root) {
  let min1 = Infinity
  let min2 = Infinity

  function goToList(arr) {
    console.log(arr.val)
    if (arr.val !== null) {
      if (arr.val !== min1 && arr.val !==min2) {
        if (min2 > arr.val) {
          if (min1 > arr.val) {
            min2 = min1
            min1 = arr.val
          } else {
            min2 = arr.val
          }
        }
      }

      if (arr.right !== null) {
        goToList(arr.right)
      }

      if (arr.left !== null) {
        goToList(arr.left)
      }
    }


  }

  goToList(root)
  if (min2 === Infinity) {
    return -1
  }
  return min2
}