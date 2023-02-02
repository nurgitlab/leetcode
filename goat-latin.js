const toGoatLatin = function (sentence) {
  let a = 'a'
  return sentence.split(' ').map(word => {
    if (!isVowel(word[0])) {
      word += word[0]
      word = word.slice(1)
    }

    word += 'ma' + a

    a += 'a'
    return word
  }).join(' ')
}

function isVowel(l) {
  l = l.toLowerCase()
  if (
    l === 'a' ||
    l === 'e' ||
    l === 'i' ||
    l === 'o' ||
    l === 'u'
  ) {
    return true
  }

  return false
}