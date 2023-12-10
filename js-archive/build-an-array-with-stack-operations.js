/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
  let ans = []
  let set = new Set(target)
  for (let i = 1; i <= target.at(-1); i++) {
    if (set.has(i)) {
      ans.push('Push')
    } else {
      ans.push('Push', 'Pop')
    }
  }

  return ans
}