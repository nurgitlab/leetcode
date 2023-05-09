/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
  gifts = gifts.sort((a,b) => b - a)

  while (k > 0) {
    gifts[0] = Math.floor(Math.sqrt(gifts[0]))
    gifts = gifts.sort((a,b) => b - a)
    k--
  }
  console.log(gifts)
  return gifts.reduce((sum, el) => sum+=el, 0)
};