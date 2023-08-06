var peopleIndexes = function(favoriteCompanies) {
  let k = 0, mem = {}
  favoriteCompanies.forEach(arr => arr.forEach(company => {
    if (mem[company] === undefined) {
      mem[company] = k
      k++
    }
  }))

  let fv = favoriteCompanies.map(arr => new Set(arr.map(el => mem[el])))
  let ans = []

  for (let i = 0; i < fv.length; i++) {
    let isOk = true

    for (let j = 0; j < fv.length; j++) {
      if (i === j) continue

      let a = [...fv[i]], z = 0
      for (let k = 0; k < a.length; k++) {
        if (fv[j].has(a[k])) z++
      }

      if (a.length === z) {
        isOk = false
        break
      }
    }

    if (isOk) ans.push(i)
  }

  return ans
}
