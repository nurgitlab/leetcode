const findOcurrences = function (text, first, second) {
  const textArr = text.split(' ')

  let ans = []
  for (let i = 0; i < textArr.length - 2; i++) {
    if (textArr[i] === first && textArr[i + 1] === second) {
      ans.push(textArr[i+2])
    }
  }
  return ans
}

console.log(findOcurrences("we will we will rock you", "we", "will"))