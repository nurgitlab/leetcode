/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function(node) {
  let arr = []

  function go(nd) {
    if (nd!==null) {
      arr.push(nd.val)
      go(nd.next)
    }
  }

  go(node)

  let j = 1

  function r (nd) {
    if (nd!==null) {
      nd.val = arr[j]
      j+=1

      if (j < arr.length) {
        r(nd.next)
      } else {
        nd.next = null
      }
    }
  }

  r(node)
};