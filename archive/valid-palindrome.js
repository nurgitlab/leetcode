var isPalindrome = function (s) {
  s = s.replace(/[^a-zа-яё0-9]/gi, '').toLowerCase();
  console.log(s)
  return (s === s.split('').reverse().join(''))
};

console.log(isPalindrome("0P"))