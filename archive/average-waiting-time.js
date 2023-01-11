const averageWaitingTime = function(customers) {
  let mem = 0
  let totalWait = 0
  for (let i = 0; i < customers.length; i++) {
    let [start, wait] = customers[i]
    if (i === 0) {
      totalWait+=wait
    } else {
      if (customers[i - 1][0] + mem + customers[i - 1][1] > start) {
        totalWait+= customers[i - 1][0] + mem + customers[i - 1][1] + wait - start
        mem+=customers[i - 1][0] + customers[i - 1][1] - start
      } else {
        mem = 0
        totalWait+=wait
      }
    }
  }

  return totalWait / customers.length
}

console.log(averageWaitingTime([[2,3],[6,3],[7,5],[11,3],[15,2],[18,1]]))