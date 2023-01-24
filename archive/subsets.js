/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let set = new Set([nums.join('&')])

  function rec(arr) {
    for (let i = 0; i < arr.length; i++) {
      let copy = [...arr]
      copy = [...copy.slice(0, i), ...copy.slice(i + 1)]
      set.add(copy.join('&'))
      rec(copy)
    }
  }

  rec(nums)
  let ans = [...set]
  ans = ans.map(el => el.split('&').map(e => {
    if (e.length > 0) {
      return Number(e)
    } else {
      return e
    }
  }).filter(e => e !== ''))

  console.log(ans)

  ans = ans.sort((a, b) => {
    if (a.length === b.length) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return a[i] - b[i]
        }
      }

      return 0
    } else {
      return a.length - b.length
    }
  })
  return ans
};