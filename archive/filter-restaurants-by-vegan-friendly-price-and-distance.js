const filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
  let l = false
  if (veganFriendly === 0) {
    l = true
  }
  return restaurants.filter(([id, rate, friendly, price, distance] )=> {

    if (
      (friendly === veganFriendly || l) &&
      price <= maxPrice &&
      distance <= maxDistance
    ) {return true}

    return false
  }).sort((a,b) => {
    if (b[1] === a[1]) {
      return b[2] - a[2]
    } else {
      return b[1] - a[1]
    }
  }).map(el => el[0])
}

console.log(filterRestaurants(
 [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], 0, 50, 10
))