/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
  function rec(matrix) {
    if (matrix.length === 1) {
      return new Node(matrix[0][0])
    } else {
      if (new Set(matrix.flat(Infinity)).size === 1) {
        return new Node(matrix[0][0])
      } else {
        let a = new Node(1)

        let [m1,m2,m3,m4] = [
          makeMatrix(matrix, 0, matrix.length/2, 0, matrix.length/2),
          makeMatrix(matrix, matrix.length/2, matrix.length, 0, matrix.length/2),
          makeMatrix(matrix, 0, matrix.length/2, matrix.length/2, matrix.length),
          makeMatrix(matrix, matrix.length/2, matrix.length, matrix.length/2, matrix.length),
        ]

        a.topLeft = rec(m1)
        a.topRight = rec(m3)
        a.bottomLeft = rec(m2)
        a.bottomRight = rec(m4)

        return a
      }
    }
  }
  let root = rec(grid)

  function re (node) {
    if (node !== null) {
      if (node.topLeft === null &&
        node.topRight === null &&
        node.bottomLeft === null &&
        node.bottomRight === null
      ) {
        node.isLeaf = 1
      } else {
        node.isLeaf = 0
        re(node.topLeft)
        re(node.topRight)
        re(node.bottomLeft)
        re(node.bottomRight)
      }
    }
  }
  re(root)
  console.log(root)
  return root
};

function makeMatrix(matrix, x1, x2, y1, y2) {
  let ans = []
  for (let i = x1; i < x2; i++) {
    let line = []
    for (let j = y1; j < y2; j++) {
      line.push(matrix[i][j])
    }
    ans.push(line)
  }

  return ans
}