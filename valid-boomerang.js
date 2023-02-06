const eps = 0.00001
const isBoomerang = function(points) {
  let set = new Set(points.map(([x,y]) => x + '-' + y))

  if (set.size!==3) {return false}
  //y1 = ax1 + b
  //y2 = ax2 + b

  //y1-y2 = ax1 - ax2
  //a = (y1 - y2) / (x1 - x2)

  let [q,w,e] = points

  if (q[0] === w[0]) {
    console.log('here')
    return !(q[0]===e[0])
  } else {
    let a = (q[1] - w[1]) / (q[0] - w[0])
    let b = q[1] - a * q[0]
    console.log(a, b, a * e[0] + b, e[1])
    let pr = a * e[0] + b
    if (Math.abs(Math.floor(pr) - pr) < eps) {
      pr = Math.floor(pr)
    }

    if (Math.abs(Math.floor(pr) + 1 - pr) < eps) {
      pr = Math.floor(pr) + 1
    }

    return !(e[1] === pr)
  }
}