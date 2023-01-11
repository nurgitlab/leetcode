var reverseWords = function (s) {
  let ans = ''
  s.split(' ').forEach(word => {
    ans += word.split('').reverse().join('') + ' '
  })

  return ans.trim()
};

console.log(reverseWords("Let's take LeetCode contest"))