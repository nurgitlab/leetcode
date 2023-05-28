/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  people = people.sort((a,b) => a - b)

  let [l, r, ans] = [0, people.length - 1, 0]

  while (l <= r) {
    if (people[l] + people[r] <= limit) {
      ans++
      r--
      l++
      continue
    }

    r--
    ans++
  }

  return ans
}