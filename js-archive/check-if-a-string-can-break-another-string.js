const checkIfCanBreak = function (s1, s2) {
  s1 = sortStr(s1)
  s2 = sortStr(s2)

  return isOk(s1, s2) || isOk(s2, s1)
}

function isOk(s1, s2) {
  for (let i = 0; i < s1.length; i++) {
    if (s1[i].charCodeAt(0) > s2[i].charCodeAt(0)) {
      return false
    }
  }

  return true
}

function sortStr(s) {
  return s.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')
}

console.log(checkIfCanBreak("szy", "cid"))