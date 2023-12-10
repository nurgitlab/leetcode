var PredictTheWinner = function(nums) {
  function rec(arr, isFirst, p1, p2) {
    if (arr.length === 0) return [p1, p2]

    let first = arr.at(0), last = arr.at(-1)

    if (isFirst) {
      let [t1, t2] = rec(arr.slice(1), !isFirst, p1 + first, p2)
      let [t3, t4] = rec(arr.slice(0, arr.length - 1), !isFirst, p1 + last, p2)

      if (t1 > t3) return [t1, t2]
      return [t3, t4]
    } else {
      let [t1, t2] = rec(arr.slice(1), !isFirst, p1, p2 + first)
      let [t3, t4] = rec(arr.slice(0, arr.length - 1), !isFirst, p1, p2 + last)

      if (t2 > t4) return [t1, t2]
      return [t3, t4]
    }
  }

  let [x1, x2] = rec(nums, true, 0, 0)
  return x1 >= x2
};