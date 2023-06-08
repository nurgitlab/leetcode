/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  let ans = []

  function rec(node) {
    if (node === null) return;
    ans.push(new Node(node.val))
    rec(node.child)
    rec(node.next)
  }

  rec(head)

  for (let i = 0; i < ans.length - 1; i++) {
    ans[i].next = ans[i + 1]
  }
  for (let i = ans.length - 1; i > 0; i--) {
    ans[i].prev = ans[i - 1]
  }

  return ans[0]
}