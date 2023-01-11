const allPathsSourceTarget = function(graph) {
  let mem = new Set()
  function goToNextNode (checkedNodes, currentNode, route) {
    if (currentNode === graph.length - 1) {
      mem.add(String(route))
    } else {
      for (let i = 0; i < graph[currentNode].length; i++) {
        if (checkedNodes[graph[currentNode][i]] === undefined) {
          let copyCheckedNodes = {...checkedNodes}
          copyCheckedNodes[graph[currentNode][i]] = true
          goToNextNode(copyCheckedNodes, graph[currentNode][i], [...route,graph[currentNode][i]])
        }
      }
    }
  }

  goToNextNode({}, 0, [0])

  let ans = [...mem]
  ans.forEach((a, i) => {
    ans[i] = ans[i].split(',')
    ans[i].forEach((el, j) => {
      ans[i][j] = Number(el)
    })
  })
  return ans
}

console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]))