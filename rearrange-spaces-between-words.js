/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
  let [spaces, words] = [0, []]
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      spaces++
      continue
    }

    let word = ''

    while (text[i] !== ' ' && i < text.length) {
      word+=text[i]
      i++
    }
    words.push(word)
    i-=1
  }
  if (words.length === 1) {
    return words[0] + Array(spaces).fill(' ').join('')
  }

  let dist = Array(Math.floor(spaces / (words.length - 1))).fill(' ').join('')

  let extra = Array(spaces % (words.length - 1)).fill(' ').join('')

  return words.join(dist) + extra
};