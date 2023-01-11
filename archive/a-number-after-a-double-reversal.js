const isSameAfterReversals = function(num) {
  if (num < 10) {return true} else {
    if (num % 10 === 0) {return false} else {
      return num
    }
  }
};

console.log(isSameAfterReversals(5))