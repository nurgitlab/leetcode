var judgeCircle = function (moves) {
  let coorinates = [0, 0]

  const move = {
    "U": () => coorinates[0] += 1,
    "D": () => coorinates[0] -= 1,
    "L": () => coorinates[1] -= 1,
    "R": () => coorinates[1] += 1,
  }

  moves.split('').forEach(el => {
    move[el]()
  })

  if (coorinates[0] === 0 && coorinates[1] === 0) {
    return true
  } else {
    return false
  }
};

console.log(judgeCircle("LL"))