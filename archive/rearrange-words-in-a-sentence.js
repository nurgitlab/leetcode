const arrangeWords = function(text) {
  text = text.split(' ').sort((a,b) => a.length - b.length).join(' ').toLowerCase().split('')
  text[0] = text[0].toUpperCase()
  return text.join('')
}

console.log(arrangeWords("Keep calm and code on"))