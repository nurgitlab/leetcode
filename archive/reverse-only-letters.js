const reverseOnlyLetters = function(s) {
  let reversed = s.split('').filter(el => isLetter(el)).reverse()

  let ans = ''
  let k = 0;
  for (let i = 0; i < s.length; i++) {
    if (isLetter(s[i])) {
      ans+=reversed[k]
      k++
    } else {
      ans+=s[i]
    }
  }
  return ans
};

function isLetter (el) {
  if (
    (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) ||
    (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90)
  ) {
    return true
  }
  return false
}

console.log(reverseOnlyLetters("a-bC-dEf-ghI==j"))

console.log('a'.charCodeAt(0)) //97
console.log('z'.charCodeAt(0)) //122
console.log('A'.charCodeAt(0)) //65
console.log('Z'.charCodeAt(0)) //90