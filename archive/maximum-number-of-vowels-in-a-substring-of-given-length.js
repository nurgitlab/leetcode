/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  let counter = 0
  let ans = 0
  for (let i = 0; i < k; i++) {
    if (isVowel(s[i])) {
      counter++
    }

    ans = Math.max(ans, counter)
  }

  for (let i = k; i < s.length; i++) {
    if (isVowel(s[i - k])) {
      counter--
    }

    if (isVowel(s[i])) {
      counter++
    }

    ans = Math.max(ans, counter)
  }

  return ans
}

function isVowel (letter) {
  let set = new Set(['a', 'e', 'i', 'o','u'])

  return set.has(letter)
}
