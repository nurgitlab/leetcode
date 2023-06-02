/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  let [mem1, mem2] = [word1, word2].map(el => wordToObj(el))

  if (!isEqualLetters(mem1, mem2)) return false
  if (!isEqualSizes(mem1, mem2)) return false
  return true
}

function isEqualSizes(obj1, obj2) {
  let [s1, s2] = [obj1, obj2].map(obj => Object.values(obj).sort((a,b) => a - b))

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) return false
  }

  return true
}

function isEqualLetters(obj1, obj2) {
  let allKeys = [obj1, obj2].map(obj => Object.keys(obj)).flat(1)

  for (let i = 0; i < allKeys.length; i++) {
    if (obj1[allKeys[i]] === undefined || obj2[allKeys[i]] === undefined) return false
  }

  return true
}

function wordToObj(word) {
  let mem = {}

  word.split('').forEach(l => mem[l] === undefined ? mem[l] = 1 : mem[l]++)

  return mem
}