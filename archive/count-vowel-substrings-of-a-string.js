const countVowelSubstrings = function (word) {
  word = word.split('')
  let ans = 0
  for (let i = 0; i < word.length; i++) {
    let str = ''
    for (let j = i; j < word.length; j++) {
      if (
        word[j]==='a' ||
        word[j]==='e' ||
        word[j]==='i' ||
        word[j]==='o' ||
        word[j]==='u'
      ) {
        str+=word[j]
        if (isCorrect(str)) {
          ans++
        }
      } else {
        break
      }
    }
  }

  return ans
}

function isCorrect(str) {
  let s = new Set(str.split(''))
  if (
    s.has('a') &&
    s.has('e') &&
    s.has('i') &&
    s.has('o') &&
    s.has('u')
  ) {
    return true
  }

  return false
}

console.log(countVowelSubstrings("cuaieuouac"))