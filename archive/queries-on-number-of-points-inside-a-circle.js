const countPoints = function(points, queries) {
  let mem = []
  queries.forEach(circle => {
    let ans = 0
    points.forEach(point => {
      if ((
        Math.pow((point[0] - circle[0]),2) +
        Math.pow((point[1] - circle[1]),2)
      )<=Math.pow(circle[2], 2)) {
        ans++
      }
    })
    mem.push(ans)
  })

  return mem
}