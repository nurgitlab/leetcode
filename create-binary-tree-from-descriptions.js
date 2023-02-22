/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
const createBinaryTree = function(descriptions) {
  let nodes = {}

  let rootNode = []
  let childs = new Set()
  descriptions.forEach(([val, child, isLeft]) => {
    rootNode.push(val)
    if (nodes[val] === undefined) {
      nodes[val] = new TreeNode(val)
    }

    childs.add(child)

    if (nodes[child] === undefined) {
      nodes[child] = new TreeNode(child)
    }

    if (isLeft === 1) {
      nodes[val].left = nodes[child]
    } else {
      nodes[val].right = nodes[child]
    }
  })

  rootNode = rootNode.filter(el => !childs.has(el))[0]


  console.log(rootNode)

  return nodes[rootNode]
}