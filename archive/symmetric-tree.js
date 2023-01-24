const isSymmetric = function (root) {
  let mem = {}

  function goTo(node, s, c) {
    if (node !== null) {
      if (mem[s] === undefined) {
        mem[s] = []
      }
      mem[s].push([node.val, Math.abs(c)])
      s += 1
      goTo(node.left, s, c - 1 / s)
      goTo(node.right, s, c + 1 / s)
    }
  }

  goTo(root, 0, 0)

  let ans = true
  Object.keys(mem).forEach(k => {
    if (Number(k) > 0 && mem[k].length % 2 !== 0) {
      ans = false
    }
    mem[k].forEach((el, i) => {
      if (
        el[0] !== mem[k][mem[k].length - 1 - i][0] ||
        el[1] !== mem[k][mem[k].length - 1 - i][1]
      ) {
        ans = false
      }
    })
  })

  console.log(mem)

  return ans
};