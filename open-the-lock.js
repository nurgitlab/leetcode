/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  let graph = {}
  deadends = new Set(deadends)

  for (let a = 0; a < 10; a++) {
    for (let b = 0; b < 10; b++) {
      for (let c = 0; c < 10; c++) {
        for (let d = 0; d < 10; d++) {
          let s = `${a}${b}${c}${d}`

          let set = new Set()
          let [a1,b1,c1,d1] = [a,b,c,d].map(el => el - 1 === -1 ? 9 : el - 1)
          let [a2,b2,c2,d2] = [a,b,c,d].map(el => el + 1 === 10 ? 0 : el + 1)

          set.add(`${a1}${b}${c}${d}`)
          set.add(`${a}${b1}${c}${d}`)
          set.add(`${a}${b}${c1}${d}`)
          set.add(`${a}${b}${c}${d1}`)

          set.add(`${a2}${b}${c}${d}`)
          set.add(`${a}${b2}${c}${d}`)
          set.add(`${a}${b}${c2}${d}`)
          set.add(`${a}${b}${c}${d2}`)

          graph[s] = set
        }
      }
    }
  }
  console.log('To', target)
  function go (visited, currentNodes, r) {
    if (currentNodes.length === 0) return -1
    let nextNodes = new Set()
    for (let i = 0; i < currentNodes.length; i++) {
      if (deadends.has(currentNodes[i])) continue
      graph[currentNodes[i]].forEach(el => {
        if (visited.has(el)) return;
        visited.add(el)
        nextNodes.add(el)
      })
    }
    console.log(currentNodes)
    console.log(r, "____")
    if (nextNodes.has(target)) return r
    if (nextNodes.length === 0) return -1
    currentNodes.forEach(el => visited.add(el))
    return go(visited, [...nextNodes], r + 1)
  }

  if (target === "0000") return 0
  return go(new Set(), ["0000"], 1)
}