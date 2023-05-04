const sortTheStudents = function(score, k) {
  return score.sort((a,b) => b[k] - a[k])
};