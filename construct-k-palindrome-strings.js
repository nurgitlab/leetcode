var canConstruct = function(s, k) {
  let mem = {}

  s.split("").forEach(el => mem[el] === undefined ? mem[el] = 1 : mem[el]++)
  let r = Object.values(mem).reduce((s, v) => v % 2 === 1 ? s + 1 : s, 0)

  if (r <= k && s.length >= k) return true

  return false
};