const isSumEqual = function (firstWord, secondWord, targetWord) {
  return ((Number(wordToNumbers(firstWord)) + Number(wordToNumbers(secondWord))) === Number(wordToNumbers(targetWord)))
};

function wordToNumbers(word) {
  let nums = word.split('').map(el => {
    return letterToNum(el)
  })
  let ans = ''
  let ledNulls = true
  for (let i = 0; i < nums.length; i++) {
    if (ledNulls) {
      if (nums[i] === '0') {
        continue
      } else {
        ledNulls = false
        ans += nums[i]
      }
    } else {
      ans += nums[i]
    }
  }
  return ans
}

function letterToNum(l) {
  if (l === 'a') {
    return '0'
  } else if (l === 'b') {
    return '1'
  } else if (l === 'c') {
    return '2'
  } else if (l === 'd') {
    return '3'
  } else if (l === 'e') {
    return '4'
  } else if (l === 'f') {
    return '5'
  } else if (l === 'g') {
    return '6'
  } else if (l === 'h') {
    return '7'
  } else if (l === 'i') {
    return '8'
  } else if (l === 'j') {
    return '9'
  }
}

console.log(isSumEqual("acb", "cba", "cdb"))