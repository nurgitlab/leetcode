/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
  let ans = []
  for (let i = 0; i < arr.length; i++) {
    let a = []

    for (let j = 0; j < size; j++) {
      if (arr[i] === undefined) break
      a.push(arr[i])
      i++
    }
    i--

    ans.push(a)
  }

  return ans
}