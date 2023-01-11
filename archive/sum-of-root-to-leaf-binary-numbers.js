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
const sumRootToLeaf = function(root) {
  let b = []

  function goToLists (arr, mem) {
    if (arr.val !== null) {
      if (arr.right !== null) {
        goToLists(arr.right, [...mem, arr.val])
      }

      if (arr.left !== null) {
        goToLists(arr.left, [...mem, arr.val])
      }

      if (arr.left === null &&
        arr.right === null) {
        b.push([...mem, arr.val].join(''))
      }
    }
  }

  goToLists(root, [])
  return to10(b)
}

function to10 (arr) {
  let sum = 0
  arr.forEach(n => {
    let a = n.split('')
    let s = 0
    for (let i = a.length - 1; i>=0; i--) {
      s+=a[i] * Math.pow(2, a.length - 1 - i)
    }

    sum+=s
  })

  return sum
}