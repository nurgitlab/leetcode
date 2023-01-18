const rightSideView = function(root) {
  let mem = {}
  function go (node, s) {
    if (node!==null) {
      if (mem[s] === undefined) {mem[s] = []}
      mem[s].push(node.val)
      go(node.left, s + 1)
      go(node.right, s + 1)
    }
  }

  go(root, 0)

  let ans = []
  let arr = []

  Object.keys(mem).forEach(k => {
    arr.push([Number(k), mem[k]])
  })


  arr.sort((a,b) => a[0] - b[0])
  console.log(arr)

  ans = arr.map(el => {
    el = el[1]

    el = el[el.length - 1]

    return el
  })
  return ans
};