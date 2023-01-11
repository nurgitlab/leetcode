const letterCasePermutation = function(s) {
  s = s.split('').map(el => el.toLowerCase())
  let set = new Set()
  function rec(startIndex, newArr) {
    set.add(newArr.join(''))
    for (let i = startIndex; i < newArr.length; i++) {
      if (newArr[i].charCodeAt(0)>=97 && newArr[i].charCodeAt(0)<=122) {
        newArr[i] = newArr[i].toUpperCase()
        rec(i, newArr)
        newArr[i] = newArr[i].toLowerCase()
      }
    }
  }
  rec(0, s)

  return [...set]
}

console.log(letterCasePermutation("C"))

