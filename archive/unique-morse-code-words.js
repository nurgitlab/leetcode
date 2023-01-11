const uniqueMorseRepresentations = function(words) {
  let alphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  let set = new Set()

  words.forEach(word => {
    let morze = ''
    word.split('').forEach(w => {
      morze+=alphabet[w.charCodeAt(0) - 97]
    })

    set.add(morze)
  })

  return set.size
}

console.log(uniqueMorseRepresentations(["a"]))