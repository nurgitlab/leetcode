var capitalizeTitle = function (title) {
  let mem = []
  title.toLowerCase().split(' ').forEach(word => {
    let localWord = word
    if (localWord.length > 2) {
      let arr = localWord.split('')
      arr[0] = arr[0].toUpperCase()
      localWord = arr.join('')
    }

    mem.push(localWord)
  })

  return mem.join(' ')
};

console.log(capitalizeTitle("First leTTeR of EACH Word"))