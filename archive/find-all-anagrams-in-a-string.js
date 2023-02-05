const findAnagrams = function(s, p) {
  let arr = s.split('').map(el => [el, {}, 0])

  const mem = {}
  for (let i = 0; i < arr.length; i++){
    let [l, _] = arr[i]

    if (mem[l] === undefined) {mem[l] = 1} else {mem[l]+=1}
    if (arr[i - p.length]!==undefined) {
      if (mem[arr[i - p.length][0]] > 1) {
        mem[arr[i - p.length][0]]-=1
      } else {
        delete mem[arr[i - p.length][0]]
      }
    }
    arr[i][1] = {...mem}
    arr[i][2] = i
    console.log(mem)
  }

  let w = {}

  for (let i = 0; i < p.length; i++) {
    if (w[p[i]] === undefined) {w[p[i]] = 0}
    w[p[i]]++
  }

  let ans = []

  arr.forEach(([l, obj, i]) => {
    let isOk = true
    Object.keys(w).forEach(k => {
      if (obj[k] === undefined) {
        isOk = false
      } else if (obj[k]!==w[k]) {
        isOk = false
      }
    })

    if (isOk) {ans.push(i - p.length + 1)}
  })
  return ans
}

console.log(findAnagrams(
  "cbaebabacd", "abc"
))