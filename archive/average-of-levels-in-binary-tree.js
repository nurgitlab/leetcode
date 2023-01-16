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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  let mem = {}
  function goToNext(node, s) {
    if (node!==null) {
      s++
      if (mem[s] === undefined) {
        mem[s] = []
      }
      mem[s].push(node.val)
      goToNext(node.left, s)
      goToNext(node.right, s)
    }
  }
  goToNext(root, 0)
  console.log(mem)
  let arr = []

  Object.keys(mem).forEach(k => {
    let sum = 0
    mem[k].forEach(el => sum+=el)
    arr.push([k, sum/mem[k].length])
  })

  arr.sort((a,b) => a[0] - b[0])

  arr = arr.map(el => el[1])

  return arr
};