/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
const maxDepth = function(root) {
  let sum = 0

  function goNext (node, g) {
    if (node!==null) {
      sum = Math.max(sum, g)
      node.children.forEach(el => {
        goNext(el, g + 1)
      })
    }
  }

  goNext(root, 1)

  return sum
};