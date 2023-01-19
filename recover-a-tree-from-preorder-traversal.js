/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {
  traversal = traversal.split('-').map(el=> el==='' ? '-' : Number(el))
  let count = 0
  for (let i = 0; i < traversal.length; i++) {
    if (traversal[i]!=='-') {
      traversal[i] = [count + 1, traversal[i]]
      count = 0
    } else {
      count++
    }
  }

  traversal[0][0] = 0
  traversal = traversal.filter(el => el !== '-').map(el => {
    return {
      value: el[1],
      gl: el[0]
    }
  })

  function rec(arr, s, parent) {
    let ind = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].gl === s) {
        ind.push(i)
      }
    }

    if (ind.length === 0) {
      return [null, null]
    }

    if (ind.length === 1) {
      arr[ind[0]].next = rec(arr.slice(1), s + 1, arr[ind[0]])

      return [arr[ind[0]], null]
    }

    if (ind.length === 2) {
      arr[ind[0]].next = rec(arr.slice(ind[0] + 1, ind[1]), s + 1, arr[ind[0]])
      arr[ind[1]].next = rec(arr.slice(ind[1] + 1), s + 1, arr[ind[1]])

      return [arr[ind[0]], arr[ind[1]]]
    }

    return arr
  }

  rec(traversal, 0, {})

  console.log(traversal[0])

  function goTo (obj) {
    if (obj!== null) {
      return new TreeNode(obj.value, goTo(obj.next[0]), goTo(obj.next[1]))
    }
  }

  return goTo(traversal[0])
};