/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
  return details.reduce((sum, str) => {
    let age = Number(str[str.length - 4] + str[str.length - 3])

    if (age > 60) {
      return sum + 1
    }

    return sum
  }, 0)
};