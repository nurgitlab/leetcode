const lexicalOrder = function(n) {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push(i + 1)
  }
  return arr.map(el => String(el)).sort((a,b) => lexiSort(a,b))
};

function lexiSort(s1, s2) {
  for (let i = 0; i < Math.min(s1.length, s2.length); i++) {
    if (s1[i]!==s2[i]) {
      return s1[i].charCodeAt(0) - s2[i].charCodeAt(0)
    }
  }

  return s1.length - s2.length
}