/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  let h = []

  while (head !== null) {
    h.push(head.val)
    head = head.next
  }

  if (h.length === 0) {return null}

  function rec (arr) {
    if (arr.length === 1) {
      return new TreeNode(arr[0])
    } else if (arr.length === 0) {
      return undefined
    } else {
      let arr1 = arr.slice(0, arr.length / 2)
      let mid = arr[Math.floor(arr.length / 2)]
      let arr2 = arr.slice((arr.length / 2) + 1)
      console.log(arr, arr1, mid, arr2)
      return new TreeNode(mid, rec(arr1), rec(arr2))
    }
  }

  return rec(h)
};