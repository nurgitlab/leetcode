const smallestFromLeaf = function(root) {
  let mem = new Set()
  let min = Infinity
  function go(node, str) {
    if (node!==null) {
      str+=String.fromCharCode(node.val + 97)
      if (node.left === null && node.right === null) {
        mem.add(str)
      } else {
        go(node.left, str)
        go(node.right, str)
      }
    }
  }
  go(root, '')
  console.log(mem)

  let a = [...mem].map(el => el.split('').reverse().join('')).sort((a,b) => sortLex(a,b))

  return a[0]
}

function sortLex (w1, w2) {
  for (let i = 0; i < Math.min(w1.length, w2.length); i++) {
    if (w1[i]!==w2[i]) {
      return w1[i].charCodeAt(0) - w2[i].charCodeAt(0)
    }
  }

  return w1.length - w2.length
}