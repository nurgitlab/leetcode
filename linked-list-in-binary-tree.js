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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
  let arr = []

  while (head !== null) {
    arr.push(head.val)
    head = head.next
  }

  let ans = false

  function rec (node, route) {
    if (node === null) return;
    if (node.left === null && node.right === null) {
      route.push(node.val)

      if (isInclude(route, arr)) {
        ans = true
      }
      console.log(route)
      return;
    }

    if (!ans) {
      rec(node.left, [...route, node.val])
      rec(node.right, [...route, node.val])
    }
  }

  rec(root, [])

  return ans
};

function isInclude (arr1, arr2) {
  if (arr2.length > arr1.length) return false
  let str2 = arr2.join('-')

  let w = arr1.slice(0, arr2.length)
  if (w.join('-') === str2) return true
  for (let i = arr2.length; i < arr1.length; i++) {
    w = [...w.slice(1), arr1[i]]

    if (w.join('-') === str2) return true
  }

  return false
}