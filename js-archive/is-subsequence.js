var isSubsequence = function (s, t) {
  for (let i = 0; i < t.length; i++) {
    if (s[0] === t[i]) {
      s = s.slice(1)
    }
  }

  if (s.length === 0) {
    return true
  } else {
    return false
  }
};

console.log(isSubsequence("abc", "ahbgdc"))