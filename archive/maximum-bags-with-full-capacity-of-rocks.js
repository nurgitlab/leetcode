const maximumBags = function(capacity, rocks, additionalRocks) {
  let mem = {}
  for (let i = 0; i < capacity.length; i++) {
    let r = Math.max(0, capacity[i] - rocks[i])
    if (mem[r] === undefined) {
      mem[r] = 1
    } else {
      mem[r]++
    }
  }

  let ans = 0
  for (let k in mem) {
    k = Number(k)
    let count = Math.floor(additionalRocks / Number(k))

    if (count >= mem[k]) {
      ans+=mem[k]
      additionalRocks-=mem[k]*k
    } else {
      ans+=count
      additionalRocks-=count*k
    }

  if (additionalRocks <= 0) {break}
  }

  return ans
}

console.log(maximumBags([10,2,2], [2,2,0], 100))