const countBinarySubstrings = function (s) {
  let ans = 0
  for (let i = 0; i < s.length; i++) {
    if (typeof findEl(s[i], i, s) === "number") {
      ans += findEl(s[i], i, s)
      i += findEl(s[i], i, s) - 1
    }
  }

  return ans
}

function findEl(currentEl, startIndex, s) {
  let count = 0
  for (let i = startIndex; i < s.length; i++) {
    if (s[i] === currentEl) {
      count++
    } else {
      break
    }
  }

  if (startIndex + 2 * count <= s.length) {
    let ns = new Set()
    for (let i = startIndex + count; i < startIndex + 2 * count; i++) {
      ns.add(s[i])
      if (ns.size > 1) break
    }
    if (ns.size === 1) return count
  }
  return false
}

console.log(countBinarySubstrings("00110011"))