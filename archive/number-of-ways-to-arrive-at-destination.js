const countPaths = function (n, roads) {
  let graph = {}

  let start = Infinity
  let finish = -Infinity

  roads.forEach(road => {
    let from = road[0]
    let to = road[1]
    let length = road[2]

    start = Math.min(start, from, to)
    finish = Math.max(finish, from, to)

    if (graph[from] === undefined) {
      graph[from] = {}
    }
    graph[from][to] = length

    if (graph[to] === undefined) {
      graph[to] = {}
    }
    graph[to][from] = length
  })

  let minLength = Infinity
  let ans = {}

  function goToNext(currentNode, route, length) {
    if (currentNode === finish) {
      minLength = Math.min(minLength, length)
      if (ans[length] === undefined) {
        ans[length] = 1
      } else {
        ans[length]++
      }
    } else {
      Object.keys(graph[currentNode]).forEach(nextNode => {
        nextNode = Number(nextNode)
        if (!route.includes(nextNode) && length + graph[currentNode][nextNode] <= minLength) {
          goToNext(
            nextNode,
            [...route, nextNode],
            length + graph[currentNode][nextNode]
          )
        }
      })
    }
  }

  goToNext(start, {0: true}, 0)
  console.log(ans)
  return ans[minLength]
}

//https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/
//дорешать дома

console.log(countPaths(
  7, [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]
))