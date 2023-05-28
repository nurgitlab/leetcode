/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
  let ans = Array(s.length).fill('')
  let [l, r] = [0, s.length - 1]

  while (l <= r) {
    if (s[l].charCodeAt(0) > s[r].charCodeAt(0)) {
      ans[l] = s[r]
      ans[r] = s[r]
    } else {
      ans[l] = s[l]
      ans[r] = s[l]
    }

    l++
    r--
  }

  return ans.join('')
};