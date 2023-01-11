const halvesAreAlike = function (s) {
  let s1 = s.slice(0, s.length / 2)
  let s2 = s.slice(s.length / 2)

  let sum = 0
  s1.split('').forEach(l => {
    if (isVowel(l)) {sum++}
  })

  s2.split('').forEach(l => {
    if (isVowel(l)) {sum--}
  })

  if (sum === 0) {return true} else {return  false}
};

function isVowel(l) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  if (vowels.includes(l)) {
    return true
  } else {
    return false
  }
}

console.log(halvesAreAlike("AbCdEfGh"))