const maximumWealth = function(accounts) {
  let max = -Infinity
  accounts.forEach(line => {
    let sum = line.reduce((sum, current) => sum + current, 0)
    max = Math.max(sum, max)
  })

  return max
};

console.log(maximumWealth([[1,2,3],[3,2,1]]))