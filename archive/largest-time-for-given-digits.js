var largestTimeFromDigits = function(arr) {
  function rec(a) {
    if (a.length === 0) return [[]]
    let ans = []

    for (let i = 0; i < a.length; i++) {
      let k = a[i]
      let r = rec([...a.slice(0, i), ...a.slice(i + 1)]).map(el => [k, ...el])
      ans.push(r)
    }

    return ans.flat(1)
  }

  let time = rec(arr)
  let maxTime = -1, ans = ''
  for (let i = 0; i < time.length; i++) {
    let h = time[i][0] * 10 + time[i][1], m = time[i][2] * 10 + time[i][3]

    if (h >= 24 || m >= 60) continue

    if (h * 60 + m > maxTime) {
      ans = `${time[i][0]}${time[i][1]}:${time[i][2]}${time[i][3]}`
      maxTime = h * 60 + m
    }
  }

  return ans
}