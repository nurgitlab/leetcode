var smallestEquivalentString = function(s1, s2, baseStr) {
  let mem = {}

  for (let i = 0; i < s1.length; i++) {
    if (mem[s1[i]] === undefined) mem[s1[i]] = new Set()
    if (mem[s2[i]] === undefined) mem[s2[i]] = new Set()

    mem[s1[i]].add(s2[i])
    mem[s2[i]].add(s1[i])
  }

  Object.keys(mem).forEach(k => {
    mem[k] = [...mem[k]]
  })

  let visited =new Set(), n = {}

  Object.keys(mem).forEach(k => {
    if (visited.has(k)) return
    let arr = rec(k, new Set(), mem).sort()
    arr.forEach(el => {
      visited.add(el)
      n[el] = arr[0]
    })
  })

  return baseStr.split('').map(el => n[el] ? n[el] : el).join('')
}

function rec(k, visited, mem) {
  if (visited.has(k)) return []
  visited.add(k)
  let ans = [k]

  mem[k].forEach(next => {
    ans.push(rec(next, visited, mem))
  })

  return ans.flat(1)
}