/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
  let p = toPattern(pattern)
  console.log(toPattern(
    'eAqlzbxahalcezelsLfj'
  ))

  return queries.map(word => {
    word = toPattern(word)

    if (word.length !== p.length) return false
    if (p.length === 0) return false
    for (let i = 0; i < p.length; i++) {
      let r = 0
      for (let j = 0; j < p[i].length; j++) {
        while (p[i][j] !== word[i][r] && r < word[i].length) r++
        if (r === word[i].length) return false
        if (word[i][r] === p[i][j]) r++
      }
    }

    return true
  })
}

function toPattern(str) {
  let ans = []

  for (let i = 0; i < str.length; i++) {

    let h = str[i]

    i+=1
    while (i < str.length && str[i] === str[i].toLowerCase()) {
      h+=str[i]
      i++
    }
    i-=1

    ans.push(h)
  }

  if (ans.length === 1) return ans
  if (ans.length > 1) ans = ans.filter(el => el[0] === el[0].toUpperCase())
  return ans
}