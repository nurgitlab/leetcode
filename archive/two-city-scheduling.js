const twoCitySchedCost = function(costs) {
  costs.sort((a,b) => ((a[0] - a[1]) - (b[0] - b[1])))
  let ans = 0
  costs.forEach((el, index) =>{
    if(index < costs.length/2)
      ans+=costs[index][0];
    else
      ans+=costs[index][1];
  })

  return ans
};

console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]))

// n/2 в А, n/2 в B
// Всего людей n

//При этом в каждый город должен прибыть курьер