/*
Дан массив ресторанов, где рестораны[i] = [idi, ratingi, veganFriendlyi, pricei, Distancei]. Вы должны отфильтровать рестораны, используя три фильтра.

Фильтр veganFriendly будет либо истинным (это означает, что вы должны включать только те рестораны, у которых для параметра veganFriendly установлено значение true), либо ложью (это означает, что вы можете включить любой ресторан). Кроме того, у вас есть фильтры maxPrice и maxDistance, которые являются максимальным значением цены и расстояния до ресторанов, которые вы должны учитывать соответственно.

Возвращает массив идентификаторов ресторанов после фильтрации, упорядоченных по рейтингу от высшего к низшему. Для ресторанов с одинаковым рейтингом расположите их по идентификатору от высшего к низшему. Для простоты veganFriendlyi и veganFriendly принимают значение 1, когда оно истинно, и 0, когда оно ложно.
 */

var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
  let ans = []

  for (let i = 0; i < restaurants.length; i++) {
    let [id, rating, isVegan, price, distance] = restaurants[i]

    if (veganFriendly === 1 && isVegan !== 1) {
      continue
    }

    if (maxPrice < price || maxDistance < distance) {
      continue
    }

    ans.push([id,rating])
  }

  return ans.sort((a,b) => {
    if ( b[1] - a[1] === 0) {
      return b[0] - a[0]
    }

    return b[1] - a[1]
  }).map(el => el[0])
};