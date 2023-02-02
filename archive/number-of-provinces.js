const findCircleNum = function(isConnected) {
  let mem = {}
  for (let i = 0; i < isConnected.length; i++) {
    mem[i] = {
      nextNodes: []
    }

    for (let j = 0; j < isConnected[i].length; j++) {
      if (isConnected[i][j]===1) {
        mem[i].nextNodes.push(j)
      }
    }
  }

  function rec (visited, current, id) {
    if (visited[current] === undefined && mem[current].region === undefined) {
      visited[current] = true
      mem[current].region = id
      mem[current].nextNodes.forEach(nodeId => {
        rec({...visited}, nodeId, id)
      })
    }
  }

  let m = 0

  Object.keys(mem).forEach(k => {
    if (mem[k].region === undefined) {
      rec({}, k, m)
      m+=1
    }
  })

  return m
}