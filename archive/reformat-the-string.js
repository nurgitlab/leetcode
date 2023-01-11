const reformat = function(s) {
  let letters = []
  let numbers = []

  s.split('').forEach(el => {
    if (el.charCodeAt(0)>= 97 && el.charCodeAt(0) <= 122) {
      letters.push(el)
    } else {
      numbers.push(el)
    }
  })
  if (Math.abs(letters.length - numbers.length) === 0) {
    let ans = ''

    for (let i = 0; i < letters.length; i++) {
      ans+=letters[i]
      ans+=numbers[i]
    }

    return ans
  }

  if (Math.abs(letters.length - numbers.length) === 1) {
    if (letters.length > numbers.length) {
      let ans = ''
      ans+=letters[letters.length - 1]
      for (let i = 0; i < letters.length - 1; i++) {
        ans+=numbers[i]
        ans+=letters[i]
      }
      return ans
    } else {
      let ans = ''
      ans+=numbers[numbers.length - 1]
      for (let i = 0; i < numbers.length - 1; i++) {
        ans+=letters[i]
        ans+=numbers[i]
      }
      return ans
    }
  }

  return ''
}

console.log(reformat("leetcode"))