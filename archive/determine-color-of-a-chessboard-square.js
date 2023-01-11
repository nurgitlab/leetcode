var squareIsWhite = function(coordinates) {
  let a = coordinates[0].charCodeAt(0)
  let b = Number(coordinates[1])
  if ((a+b)%2===0) {
    return false
  } else {
    return true
  }
};

console.log(squareIsWhite('a2'))