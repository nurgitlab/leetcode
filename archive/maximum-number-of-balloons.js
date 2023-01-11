const maxNumberOfBalloons = function(text) {
  const mem = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  }

  text.split('').forEach(l => {
    if (typeof mem[l] === 'number') {
      mem[l]++
    }
  })

  let ans = Math.min(
    mem['b'],
    mem['a'],
    Math.floor(mem['l']/2),
    Math.floor(mem['o']/2),
    mem['n'],
  )
  return ans
}

console.log(maxNumberOfBalloons('leetcode'))