const minimumMoves = function(s) {
  let c = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i]==='X') {
      c++
      i+=2
    }
  }

  return c
};

console.log(minimumMoves("XXOX"))