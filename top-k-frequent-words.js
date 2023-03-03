/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  let mem = {}

  words.forEach(word => mem[word]===undefined ? mem[word] = 1 : mem[word]++)

  return Object.entries(mem).sort(([a, aval],[b, bval]) => {
    if (aval!==bval) {
      return bval - aval
    } else {
      for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i]!==b[i]) {return a[i].charCodeAt(0) - b[i].charCodeAt(0)}
      }

      return a.length - b.length
    }
  }).splice(0,k).map(el => el[0])

};