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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
  let [maxLvl, numOfNodes] = [-Infinity, 0]

  function rec(node, lvl) {
    if (node === null) return;

    if (lvl > maxLvl) {
      maxLvl = lvl
      numOfNodes = 1
    } else if (lvl === maxLvl) {
      numOfNodes++
    }

    rec(node.left, lvl + 1)
    rec(node.right, lvl + 1)
  }

  rec(root, 0)

  console.log(maxLvl, numOfNodes)
  let ans;
  function r(node, lvl) {
    if (node === null) return 0;
    console.log(lvl, ':', node.val)


    let deep = r(node.left, lvl + 1) + r(node.right, lvl + 1)

    if (lvl === maxLvl) {
      deep+=1
    };

    if (deep === numOfNodes) {
      ans = node
      deep = 0
    }

    return deep
  }

  r(root, 0)

  return ans
};