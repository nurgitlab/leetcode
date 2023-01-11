const decodeMessage = function (key, message) {
  let set = new Set(key.split(' ').join('').split(''))
  set = [...set]
  message = message.split('')
  let alphabet = {}
  for (let i = 0; i < set.length; i++) {
    alphabet[set[i]] = String.fromCharCode(i + 97)
  }

  message.forEach((l, i) => {
    if (alphabet[l]) {
      message[i] = alphabet[l]
    }
  })
  return message.join('')
}

console.log(decodeMessage( "the quick brown fox jumps over the lazy dog",   "vkbs bs t suepuv"))