const firstPalindrome = function(words) {
  let ans = ''
  for (let word of words) {
    if (word === word.split('').reverse().join('')) {
      ans = word
      break
    }
  }

  return ans
};

console.log(firstPalindrome(["notapalindrome","racecar"]))