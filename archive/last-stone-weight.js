const lastStoneWeight = function(stones) {
  while (stones.length > 1) {
    let m1 = 0
    let m2 = 0
    let i1 = -1
    let i2 = -1

    stones.forEach((el, i) => {
      if (el > m2) {
        if (el > m1) {
          m2 = m1
          m1 = el
          i2 = i1
          i1 = i
        } else {
          m2 = el
          i2 = i
        }
      }
    })

    stones[i1]-=stones[i2]
    stones[i2]  = 0
    stones = stones.filter(stone => stone > 0)
  }

  if (stones.length === 1) {
    return stones[0]
  }
  return 0
}

console.log(lastStoneWeight([2,7,4,1,8,1]))