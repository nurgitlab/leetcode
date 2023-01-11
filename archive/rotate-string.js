const rotateString = function(s, goal) {
  return (s+s).split(goal).join('').length === s.length && s.length === goal.length
};

console.log(rotateString("abcde", "cdeab"))