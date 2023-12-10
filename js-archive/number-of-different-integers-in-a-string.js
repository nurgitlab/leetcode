const numDifferentIntegers = function (word) {
  let set = new Set()
  for (let i = 0; i < word.length; i++) {
    if (isNumber(word[i])) {
      let mem = ''
      while (isNumber(word[i])) {
        mem += word[i]
        i++
      }
      let cz = 0
      for (let j = 0; j < mem.length; j++) {
        if (mem[j] === '0') {
          cz++
        } else {
          break
        }
      }
      mem = mem.slice(cz)
      set.add(mem)
    }
  }

  return set.size
};

function isNumber(l) {
  if (
    l === '0' ||
    l === '1' ||
    l === '2' ||
    l === '3' ||
    l === '4' ||
    l === '5' ||
    l === '6' ||
    l === '7' ||
    l === '8' ||
    l === '9'
  ) {
    return true
  } else {
    return false
  }
}

console.log(numDifferentIntegers("a123bc034d8ef034"))