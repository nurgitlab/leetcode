const ParkingSystem = function(big, medium, small) {
  this[1] = big
  this[2] = medium
  this[3] = small
}

ParkingSystem.prototype.addCar = function(carType) {
  console.log(carType)
  carType = [carType]

  this[carType]-=1

  if (this[carType] >= 0) {
    return true
  }

  return false
}