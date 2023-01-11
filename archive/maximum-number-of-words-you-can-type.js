const canBeTypedWords = function(text, brokenLetters) {
  brokenLetters = brokenLetters.split('')
  text = text.split(' ')

  let ans = 0
  text.forEach(word => {
    let ok = true
    word.split('').forEach(l => {
      if (brokenLetters.includes(l)) {ok = false}
    })

    if (ok) {ans++}
  })

  return ans
};

console.log(canBeTypedWords("hello world", "ad"))