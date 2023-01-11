const maxIceCream = function(costs, coins) {
  costs.sort((a,b) => a - b)
  let ans = 0
  for (let i = 0; i < costs.length; i++) {
    if (coins >= costs[i]) {
      ans++
      coins-=costs[i]
    } else break
  }

  return ans
};

console.log(maxIceCream([1,3,2,4,1],7))