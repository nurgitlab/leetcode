var isHappy = function (n) {
  let set = new Set()

  function rec(m) {
    if (m === 1) {
      return true
    } else {
      let sum = 0

      let s = '' + m
      for (let i = 0; i < s.length; i++) {
        sum += Number(s[i]) ** 2
      }
      if (set.has(sum)) {
        return false
      } else {
        set.add(sum)
        return rec(sum)
      }
    }
  }

  return rec(n)
};

console.log(isHappy(19))