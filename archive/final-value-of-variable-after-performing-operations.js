const finalValueAfterOperations = function(operations) {
  let sum = 0
  operations.forEach(el => {
    if (el === '--X' || el === 'X--') {
      sum--
    } else {
      sum++
    }
  })

  return sum
};

console.log(finalValueAfterOperations(["--X","X++","X++"]))