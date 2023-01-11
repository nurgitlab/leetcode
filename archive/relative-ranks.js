const findRelativeRanks = function(score) {
  let sorted = [...score].sort((a,b) => a - b)
  let mem = {}

  sorted.forEach((el, i) => {
    mem[el] = `${score.length - i}`
    if (score.length - i === 1) {
      mem[el] = "Gold Medal"
    }
    if (score.length - i === 2) {
      mem[el] = "Silver Medal"
    }
    if (score.length - i === 3) {
      mem[el] = "Bronze Medal"
    }
  })

  return score.map(el => mem[el])
}

console.log(findRelativeRanks([10,3,8,9,4]))