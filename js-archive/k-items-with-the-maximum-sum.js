/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
  let ans = 0

  if (k > numOnes) {
    ans+=numOnes
    k-=numOnes
  } else {
    return k
  }

  if (k > numZeros) {
    k-=numZeros
  } else {
    return ans
  }

  ans-=Math.min(k, numNegOnes)

  return ans
};