/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
  let [a1, a2] = [0, 0]
  if (start > destination) {
    [start, destination] = [destination, start]
  }

  for (let i = start; i < destination; i++) {
    a1+=distance[i]
  }

  for (let i = distance.length - 1; i >= destination; i--) {
    a2+=distance[i]
  }

  for (let i = 0; i < start; i++) {
    a2+=distance[i]
  }

  return Math.min(a1, a2)
};