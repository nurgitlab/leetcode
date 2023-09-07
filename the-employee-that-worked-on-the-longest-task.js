/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
  let time = 0, maxTime = -Infinity, ans = -1

  logs = logs.map(([id, end]) => {
    let k = end - time
    time+=k

    if (k > maxTime) {
      maxTime = k
      ans = id
    } else if (k === maxTime && id < ans) ans = id

    return [id, k]
  })
  console.log(logs)
  return ans
};