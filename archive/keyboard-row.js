const findWords = function(words) {
  let arr1 = 'qwertyuiop'.split('')
  let arr2 = 'asdfghjkl'.split('')
  let arr3 = 'zxcvbnm'.split('')

  let ans = []

  for (let i = 0; i < words.length; i++) {
    let wordArray = words[i].toLowerCase().split('')

    let sum1 = 0
    let sum2 = 0
    let sum3 = 0

    for (let j = 0; j < wordArray.length; j++) {
      if (arr1.includes(wordArray[j])) {
        sum1++
      }
      if (arr2.includes(wordArray[j])) {
        sum2++
      }
      if (arr3.includes(wordArray[j])) {
        sum3++
      }
    }

    if (
      sum1 === wordArray.length ||
      sum2 === wordArray.length ||
      sum3 === wordArray.length
    ) {
      ans.push(words[i])
    }
  }

  return ans
};


console.log(findWords(["Hello","Alaska","Dad","Peace"]))