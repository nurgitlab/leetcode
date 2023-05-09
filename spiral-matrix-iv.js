/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */

var spiralMatrix = function(m, n, head) {
  let [x, y, matrix, direction] = [0, 0, [], 0]

  for (let i = 0; i < m; i++) {
    matrix.push([])
  }

  while (head !== null) {
    matrix[x][y] = head.val
    let [x1, y1] = getDirection(direction)

    if (canMove(x + x1, y + y1, m, n)) {
      if (matrix[x + x1][y + y1] !== undefined) {
        direction++
        [x1, y1] = getDirection(direction)
      }
    } else {
      direction++
      [x1, y1] = getDirection(direction)
    }

    [x, y] = [x + x1, y + y1]

    head = head.next
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === undefined) {matrix[i][j] = -1}
    }
  }

  return matrix
};

function getDirection (n) {
  let directions = [
    [0, 1], // ->
    [1, 0], //down
    [0, -1], //<-
    [-1, 0] //up
  ]

  return directions[n % 4]
}

function canMove(x, y, m, n) {
  if (x < m && y < n && 0 <= x && 0 <= y) {return true}

  return false
}