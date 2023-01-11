var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return []
  }
  let letters = []
  digits.split('').forEach(el => {
    let str = lettersInNumber(el)
    letters.push(str.split(''))
  })
  let ans = []

  function rec(letter, n, str) {
    if (digits.length === str.length) {
      ans.push(str)
    } else {
      letter[n].forEach(el => {
        rec(letter, n + 1, str + el)
      })
    }
  }

  rec(letters, 0, '')

  return ans
};


function lettersInNumber(number) {
  number = Number(number)
  if (number === 2) {
    return 'abc'
  } else if (number === 3) {
    return 'def'
  } else if (number === 4) {
    return 'ghi'
  } else if (number === 5) {
    return 'jkl'
  } else if (number === 6) {
    return 'mno'
  } else if (number === 7) {
    return 'pqrs'
  } else if (number === 8) {
    return 'tuv'
  } else if (number === 9) {
    return 'wxyz'
  }
}

console.log(letterCombinations('2'))