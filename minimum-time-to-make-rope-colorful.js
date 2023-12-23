var minCost = function(colors, neededTime) {
  let ans = 0;

  for (let i = 0; i < colors.length; i++) {
    let mem = [neededTime[i]]
    while (i + 1 < colors.length && colors[i] == colors[i + 1]) {
      mem.push(neededTime[i + 1])
      i++
    }

    mem = mem.sort((a, b) => b - a)

    if (mem.length > 1) {
      console.log(mem)
      let p = mem.slice(1)
      ans+=p.reduce((s, el) => s + el, 0)
    }
  }

  return ans
}