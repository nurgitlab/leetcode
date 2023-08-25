/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
  let mem = {}
  words = words.forEach(word => mem[word] === undefined ? mem[word] = 1 : mem[word]++)
  let ans = 0, arr = Object.keys(mem)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].split('').reverse().join('')) {
      ans+=(mem[arr[i]] % 2 === 0 ? mem[arr[i]] : mem[arr[i]] - 1) * arr[i].length
      if (mem[arr[i]] % 2 === 0) {
        delete mem[arr[i]]
      } else mem[arr[i]] = 1
    } else if (mem[arr[i]] && mem[arr[i].split('').reverse().join('')]) {
      ans+= Math.min(mem[arr[i]], mem[arr[i].split('').reverse().join('')]) * 2 * arr[i].length
      delete mem[arr[i]]
      delete mem[arr[i].split('').reverse().join('')]
    }
  }

  let maxSize = 0
  console.log(mem)
  Object.keys(mem).forEach(k => {
    if (k === k.split('').reverse().join('') && maxSize < k.length) maxSize = k.length
  })

  return ans + maxSize
}