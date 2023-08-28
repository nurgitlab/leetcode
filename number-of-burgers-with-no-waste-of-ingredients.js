/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
  if (tomatoSlices % 2 !== 0) return []
  tomatoSlices/=2
  //x + 2y=tomato
  //x + y = cheese


  //y = tomato - cheese
  //x = cheese - y

  if (tomatoSlices - cheeseSlices < 0) return []
  let jambo = tomatoSlices - cheeseSlices
  let small = cheeseSlices - jambo
  if (small < 0) return []

  return [jambo, small]
}