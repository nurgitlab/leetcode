const kClosest = function(points, k) {
  let arr = points.map(p => {
    return [p[0]*p[0] + p[1]*p[1], [p[0], p[1]]]
  })

  arr.sort((a,b) => a[0] - b[0])

  let ans = []
  for (let i = 0; i < k; i++) {
    ans.push(arr[i][1])
  }
  return ans
};

console.log(kClosest([[3,3],[5,-1],[-2,4]], 2))