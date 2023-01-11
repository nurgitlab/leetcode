var canPlaceFlowers = function (flowerbed, n) {
  let l = flowerbed.length
  flowerbed[-1] = 0
  flowerbed[l] = 0
  for (let i = 0; i < l; i++) {
    if ((flowerbed[i - 1] + flowerbed[i] + flowerbed[i + 1]) < 1) {
      flowerbed[i] = 1
      n--
    }
  }

  if (n <= 0) {
    return true
  } else {
    return false
  }
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1))