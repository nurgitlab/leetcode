/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  let ans = []
  for (let i = 0; i < num_people; i++) {
    ans.push(0)
  }

  let [needToGive, i] = [1, 0]
  while (candies > 0) {
    if (needToGive > candies) {
      ans[i]+=candies
      candies = 0
    } else {
      candies-=needToGive
      ans[i]+=needToGive
      needToGive++
    }
    i++

    if (i >= ans.length) {
      i = 0
    }
  }

  return ans
};