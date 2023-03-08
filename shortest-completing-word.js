/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
const shortestCompletingWord = function(licensePlate, words) {
  let mem = {}
  licensePlate = licensePlate
    .toLowerCase().
    split('').
    forEach(el => {
      if (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
        if (mem[el] === undefined) {
          mem[el] = 0
        }

        mem[el]++
      }
    })
  let ans = null
  words.forEach(word => {
    let copy = {...mem}

    word.split('').forEach(el => {
      if (copy[el] !== undefined) {
        copy[el]--
      }
    })

    let isOk = true

    Object.values(copy).forEach(el => {if (el > 0) {isOk = false}})
    if (isOk) {
      if (ans === null) {
        ans = word
      } else {
        if (ans.length > word.length) {ans = word}
      }
    }
  })

  return ans
}