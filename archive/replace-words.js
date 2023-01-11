const replaceWords = function(dictionary, sentence) {
  let  sArr = sentence.split(' ')
  for (let i = 0; i<sArr.length; i++) {
    for (let j = 0; j < dictionary.length; j++) {
      if (dictionary[j].length > sArr[i]) {
        continue
      } else {
        if (sArr[i].slice(0, dictionary[j].length) === dictionary[j]) {
          sArr[i] = dictionary[j]
        }
      }
    }
  }

  return sArr.join(' ')
};

console.log(replaceWords( ["a","b","c"], "aadsfasf absbs bbab cadsfafs"))