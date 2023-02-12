/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function(letters, target) {
  let ans = 'zz'

  letters.forEach(l => {
    if (l.charCodeAt(0) > target.charCodeAt(0)) {
      if (l.charCodeAt(0) <= ans.charCodeAt(0)) {
        ans = l
      }
    }
  })

  if (ans === 'zz') {return letters[0]}
  return ans
};