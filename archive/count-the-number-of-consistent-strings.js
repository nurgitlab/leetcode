const countConsistentStrings = function(allowed, words) {
  allowed = allowed.split('')

  let counter = 0
  let ans = words.map(word => {
    let memWord = word
    allowed.forEach(fil => {
      memWord = memWord.split('').filter((letter) => {
        if (letter === fil) {
          return ''
        } else {
          return letter
        }
      }).join('')
    })

    if (memWord.length === 0) {
      counter++
    }
    return memWord
  })

  return counter
};

console.log(countConsistentStrings( "abc", ["a","b","c","ab","ac","bc","abc"]))