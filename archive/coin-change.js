const coinChange = function(coins, amount) {
  const mem = []
  mem[amount] = 0

  for (let i = amount; i >= 1; i--) {
    if (mem[i] === undefined) {continue}
    coins.forEach(coin => {
      let nextValue = mem[i] + 1
      if (mem[i-coin] === undefined) {
        mem[i-coin] = nextValue
      } else {
        mem[i - coin] = Math.min(nextValue, mem[i-coin])
      }
    })
  }

  if (mem[0] === undefined) {
    return -1
  } else {
    return mem[0]
  }
};

// 11 -> 11-5 -> 6//1
// 11 -> 11-2 -> 9//1
// 11 -> 11-1 -> 10//1

// 10 -> 10-5 -> 5 //2
// 10 -> 10-2 -> 8 //2
// 10 -> 10-1 -> 9 //1

// 9 -> 9 - 5 -> 4 //2
// 9 -> 9 - 2 -> 7 //2
// 9 -> 9 - 1 -> 8 //2