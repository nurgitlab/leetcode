var longestContinuousSubstring = function(s) {
  let arr = s.split('').map(el => el.charCodeAt(0) - 97)

  let ans = 1
  for (let i = 0; i < arr.length; i++) {
    let k = i

    while (i + 1 < arr.length && arr[i + 1] === arr[i] + 1) i++

    ans = Math.max(ans, i - k + 1)
  }

  return ans
};