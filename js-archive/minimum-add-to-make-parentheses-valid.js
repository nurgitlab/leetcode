const minAddToMakeValid = function (s) {
  let st = ''
  let ans = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      st += s[i]
    } else if (st.length > 0) {
      st = st.slice(0, -1)
    } else {
      ans++
    }
  }

  return ans + st.length
}

console.log(minAddToMakeValid('())'))