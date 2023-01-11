const percentageLetter = function(s, letter) {
  let n = 0
  s.split('').forEach(el => {
    if (el === letter) {n++}
  })

  return Math.floor((n/s.length)*100)
};

console.log(percentageLetter("jjjj", "k"))