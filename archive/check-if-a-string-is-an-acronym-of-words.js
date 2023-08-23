var isAcronym = function(words, s) {
  return words.map(word => word[0]).join('') === s
};