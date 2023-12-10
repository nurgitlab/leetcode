const nearestValidPoint = function (x, y, points) {
  let validNodes = points.filter(node => {
    if (node[0] === x || node[1] === y) {
      return node
    }
  })

  if (validNodes.length < 1) {
    return -1
  }

  let mem = {}
  validNodes.forEach(node => {
    let r = Math.abs(x - node[0]) + Math.abs(y - node[1])
    if (mem[r] === undefined) {
      mem[r] = [node]
    } else {
      mem[r] = [...mem[r], node]
    }
  })

  let minR = Infinity
  Object.keys(mem).forEach(k => {
    if (Number(k) < minR) {
      minR = Number(k)
    }
  })
  let corrNode = mem[minR][0]
  let ans = -1
  for (let i = 0; i < points.length; i++) {
    if (corrNode[0] === points[i][0] && corrNode[1] === points[i][1]) {
      ans = i
      break
    }
  }

  return ans
};

console.log(nearestValidPoint(3, 4, [[3, 4]]))