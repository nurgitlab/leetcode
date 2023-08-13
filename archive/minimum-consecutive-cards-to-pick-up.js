var minimumCardPickup = function(cards) {
  let mem = {}, ans = Infinity

  cards.forEach((el, i) => {
    if (mem[el] === undefined) {
      mem[el] = i
      return
    }

    ans = Math.min(ans, i - mem[el] + 1)
    mem[el] = i
  })

  return ans === Infinity ? -1 : ans
};