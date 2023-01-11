var checkIfPangram = function (sentence) {
  const mem = {}

  for (let i of sentence) {
    if (mem[i] === undefined) {
      mem[i] = 1
    }
  }

  let ans = 0

  Object.keys(mem).forEach(k => {
    ans+=1
  })

  if (ans === 26)  {
    return true
  } else {
    return  false
  }
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))