var firstUniqChar = function (s) {
  let letters = {}
  s.split('').forEach((l, i) => {
    if (letters[l] === undefined) {
      letters[l] = [i, 1]
    } else {
      letters[l][1] += 1
    }
  })

  let ans = -1
  Object.keys(letters).forEach(k => {
    if (letters[k][1] === 1 && ans === -1) {
      ans = letters[k][0]
    }
  })

  return ans
};

console.log(firstUniqChar("aabbdc"))