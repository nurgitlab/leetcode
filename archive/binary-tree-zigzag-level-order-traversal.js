let zigzagLevelOrder = function(root) {
  let mem = {}
  function rec (node, lvl) {
    if (node === null) return;

    if (mem[lvl] === undefined) {mem[lvl] = []}
    mem[lvl].push(node.val)

    rec(node.left, lvl + 1)
    rec(node.right, lvl + 1)
  }

  rec(root, 0)

  return Object.entries(mem).map(el => {
    return [Number(el[0]), ...el[1]]
  }).sort((a,b) => a[0] - b[0]).map((arr, i) => {
    arr = arr.slice(1)
    if (i % 2 === 0) {
      return arr
    } else {
      return arr.reverse()
    }
  })
}