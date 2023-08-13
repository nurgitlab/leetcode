var smallestString = function(s) {
  s = s.split('').map(el => el.charCodeAt(0) - 97)

  let isChanged = false
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 0 && !isChanged) continue
    if (s[i] === 0 && isChanged) break
    isChanged = true
    s[i]-=1
  }

  if (!isChanged) s[s.length - 1]-=1

  if (s[s.length - 1] === -1) s[s.length - 1] = 25
  return s.map(el => String.fromCharCode(97 + el)).join('')
};