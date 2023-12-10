const minTimeToType = function (word) {
  let current = 'a'
  let ans = 0
  word.split('').forEach(el => {
    ans += distation(el, current)
    ans += 1
    current = el
  })

  return ans
}

function distation(l1, l2) {
  l1 = l1.charCodeAt(0) - 97
  l2 = l2.charCodeAt(0) - 97
  return Math.min(
    Math.abs(l1 - l2),
    Math.abs(l1 - l2 - 26),
    Math.abs(l2 - l1 - 26)
  )
}

console.log(minTimeToType("zjpc"))
// 00 01 02 03 04 05 06 07 08 09 10 11 12
// 13 14 15 16 17 18 19 20 21 22 23 24 25