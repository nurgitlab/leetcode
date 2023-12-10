const removePalindromeSub = function(s) {
  let set = new Set(s.split(''))

  if (s.split('').reverse().join('') === s) {return 1}
  return set.size
}