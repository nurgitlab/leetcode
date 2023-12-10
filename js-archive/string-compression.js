/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let ans = []
  for (let i = 0; i < chars.length; i++) {
    ans.push(chars[i])
    let j = 1
    while (chars[i] === chars[i + 1]) {
      j++
      i++
    }

    if (j > 1) {
      ans.push(String(j))
    }
  }
  ans = ans.join('').split('')

  for (let i = 0; i < chars.length; i++) {
    chars[i] = ans[i]
  }
  return ans.length
};