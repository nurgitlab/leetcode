const reverseVowels = function (s) {
  let arr = []

  for (let i = 0; i < s.length; i++) {
    if (isGl(s[i])) {
      arr.push(s[i])
    }
  }

  arr = arr.reverse()

  s = s.split('')
  let j = 0

  for (let i = 0; i < s.length; i++) {
    if (isGl(s[i])) {
      s[i] = arr[j]
      j++
    }
  }

  return s.join('')
}

function isGl(letter) {
  if (
    letter === 'a' ||
    letter === 'e' ||
    letter === 'i' ||
    letter === 'o' ||
    letter === 'u' ||

    letter === 'A' ||
    letter === 'E' ||
    letter === 'I' ||
    letter === 'O' ||
    letter === 'U'
  ) {
    return true
  }

  return false
}