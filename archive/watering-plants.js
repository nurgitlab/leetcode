const wateringPlants = function(plants, capacity) {
  let sum = 0
  let currentCapacity = capacity
  plants.forEach((n, i) => {
    if (currentCapacity < n) {
      sum+= (i) * 2 + 1
      currentCapacity = capacity - n
    } else {
      currentCapacity-=n
      sum+=1
    }
  })

  return sum
};

console.log(wateringPlants([1,1,1,4,2,3], 4))